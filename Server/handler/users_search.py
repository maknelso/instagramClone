import json
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table
# from sqlalchemy.orm import declarative_base, relationship
from flask_bcrypt import Bcrypt
import jwt
import datetime
import config
from modals.Account import Account
from modals.Post import Post
from modals.Following import Following
from config import bcrypt, SECRET_KEY

profileFields = {
    "account_id": fields.Integer,
    "name": fields.String,
    "username": fields.String,
    "current_post": fields.List(fields.Nested({
        "img_url": fields.String
    })),
    "current_follower": fields.Integer,
    "current_following": fields.Integer,
    "following_posts": fields.List(fields.Nested({
        "img_url": fields.String,
        "account_id": fields.Integer
    })),
    "users": fields.List(fields.Nested({
        "username": fields.String,
        "account_id": fields.Integer
    })),
    "avatar": fields.String,
}

class users_search(Resource):
    @marshal_with(profileFields)
    def get(self):
        # duplicated -> commented out
        # searchInput = json.loads(request.get_data())
        searchedUser = Account.query.filter_by(username='123').first()

        # 1) have user type in the username
        searchInput = json.loads(request.get_data())

        # 2) join tables
        # get Account columns from user's typed input
        searched_user = Account.query.filter_by(
            username=searchInput['username']).first()

        # get the current logged in user id
        account_id = searched_user.account_id

        # from account_id get all the images from Post table
        posts = Post.query.filter_by(account_id=account_id).all()

        # join Posts table with our Account table (filtered on searched_user)
        searched_user.current_post = posts

        # join table to get FOLLOWER and FOLLOWING counts
        follower = len(Following.query.filter_by(follower_id=account_id).all())
        searched_user.current_following = follower

        following = len(Following.query.filter_by(following_id=account_id).all())
        searched_user.current_follower = following

        # 1. use logged in user account_id to look up for the matching following_id
        following_users = Following.query.filter_by(follower_id=account_id).all()

        # 2. loop over the matching following_id and put those ids in an array
        current_following_id_arr = []

        for followingObj in following_users:
            current_following_id_arr.append(followingObj.following_id)

            print(current_following_id_arr)

            posts = Post.query.filter(Post.account_id.in_(current_following_id_arr)).all()

            users = Account.query.filter(
                Account.account_id.in_(current_following_id_arr)).all()

            searched_user.following_posts = posts
            searched_user.users = users

            return searched_user

# 3) call GET method
# user types in username they want to see in search box
