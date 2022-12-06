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
from modals.Comment import Comment
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
        "post_id": fields.Integer,
        # "desc": fields.String
        # "liked_user_name": fields.String,

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

            account_id = current_user.account_id

            posts = Post.query.filter_by(
                account_id=account_id).all()

            current_user.current_post = posts

            follower = len(Following.query.filter_by(
                follower_id=account_id).all())

            current_user.current_following = follower

            following = len(Following.query.filter_by(
                following_id=account_id).all())

            current_user.current_follower = following

            following_users = Following.query.filter_by(
                follower_id=account_id).all()

            current_following_id_arr = []

            for followingObj in following_users:
                current_following_id_arr.append(followingObj.following_id)

            posts = Post.query.filter(
                Post.account_id.in_(current_following_id_arr)).all()

            # query for all comments made by logged in user

            # comments = Comment.query.filter_by(
            #     account_id=account_id).all()

            # add comment to associated post feed

            # for each_post in posts:
            #     for each_comment in comments:
            #         if each_comment.post_id == each_post.post_id:
            #             each_post.desc = each_comment.comment_text

            current_user.following_posts = posts

            users = Account.query.filter(
                Account.account_id.in_(current_following_id_arr)).all()
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

            else:
                like_info = Like.query.filter_by(
                    account_id=current_user.account_id, post_id=frontend_data["post_id"]).first()
                db.session.delete(like_info)

            db.session.commit()

        except Exception as e:
            print("err")
            print(e)
            # return jsonify({
            #     'message': 'Token is invalid !!'
            # }), 401

        # return like_table
