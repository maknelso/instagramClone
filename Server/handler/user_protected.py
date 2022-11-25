import json
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table
# from sqlalchemy.orm import declarative_base, relationship
from flask_bcrypt import Bcrypt
import jwt
from modals.Account import Account
from modals.Post import Post
from modals.Following import Following
from modals.Like import Like
from config import SECRET_KEY, db


protectFields = {
    "account_id": fields.Integer,
    "email": fields.String,
    "name": fields.String,
    "username": fields.String,
    "current_post": fields.List(fields.Nested({
        "img_url": fields.String,
        "img_description": fields.String
    })),
    "current_follower": fields.Integer,
    "current_following": fields.Integer,
    "following_posts": fields.List(fields.Nested({
        "img_url": fields.String,
        "img_description": fields.String,
        "account_id": fields.Integer,
        "post_id": fields.Integer
    })),
    "users": fields.List(fields.Nested({
        "username": fields.String,
        "account_id": fields.Integer,
        "avatar": fields.String
    })),
    "avatar": fields.String,
}

likeFields = {
    "account_id": fields.Integer,
    "post_id": fields.Integer,

}


class users_protect(Resource):
    @ marshal_with(protectFields)
    def get(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401

        auth_token = request.headers.get("Authorization").split(" ")[1]

        try:
            data = jwt.decode(
                auth_token, SECRET_KEY, algorithms="HS256")

            current_user = Account.query.filter_by(email=data['email']).first()

            # get the current logged in user id

            account_id = current_user.account_id

            # user current user id to look up info in post table

            posts = Post.query.filter_by(
                account_id=account_id).all()

            # adding looked up info from post table to output field

            current_user.current_post = posts

            # look up info from following table and add to output field

            follower = len(Following.query.filter_by(
                follower_id=account_id).all())

            current_user.current_following = follower

            following = len(Following.query.filter_by(
                following_id=account_id).all())

            current_user.current_follower = following

            # use account_id to look up following_id, and push these following id to an new array, and then use the following id to look up the associated array of posts.

            # 1. use logged in user account_id to look up for the matching following_id
            following_users = Following.query.filter_by(
                follower_id=account_id).all()

            # 2. loop over the matching following_id and put those ids in an array
            current_following_id_arr = []

            for followingObj in following_users:
                current_following_id_arr.append(followingObj.following_id)

            # print(current_following_id_arr)

            posts = Post.query.filter(
                Post.account_id.in_(current_following_id_arr)).all()

            users = Account.query.filter(
                Account.account_id.in_(current_following_id_arr)).all()

            current_user.following_posts = posts
            current_user.users = users

            # join like with account and post table

            # except:
            #     return jsonify({
            #         'message': 'Token is invalid !!'
            #     }), 401

        except Exception as e:
            print("err")
            print(e)
            # return jsonify({
            #     'message': 'Token is invalid !!'
            # }), 401

        return current_user

    @ marshal_with(likeFields)
    def post(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401

        auth_token = request.headers.get("Authorization").split(" ")[1]
        # auth_token = request.headers.get("Authorization")

        try:
            jwt_data = jwt.decode(
                auth_token, SECRET_KEY, algorithms="HS256")

            frontend_data = json.loads(request.get_data())

            current_user = Account.query.filter_by(
                email=jwt_data['email']).first()

            if frontend_data["like"]:
                like_info = Like(account_id=current_user.account_id,
                                 post_id=frontend_data['post_id'])
                db.session.add(like_info)
                # db.session.commit()

            else:
                # delete
                # pass
                like_info = Like.query.filter_by(
                    account_id=current_user.account_id, post_id=frontend_data["post_id"]).first()
                db.session.delete(like_info)
                # db.session.commit()

            db.session.commit()

            # like_table = Like.query.all()

        except Exception as e:
            print("err")
            print(e)
            # return jsonify({
            #     'message': 'Token is invalid !!'
            # }), 401

        # return like_table
