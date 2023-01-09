import json
from flask import Flask, request, jsonify
from flask_restful import Resource, marshal_with, fields

# from sqlalchemy.orm import declarative_base, relationship
from flask_bcrypt import Bcrypt
import jwt
from config import bcrypt
from modals.Account import Account
from modals.Following import Following
from config import SECRET_KEY, db

# create an outline of what the data should look like (the names of the fields and their types)

userFields = {
    "follower_id": fields.Integer,
    "following_id": fields.String,
}

# the marshall_with decorator encodes data to send back to the user as JSON


class update_follow(Resource):
    @marshal_with(userFields)
    def post(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401
        auth_token = request.headers.get("Authorization").split(" ")[1]

        data = jwt.decode(auth_token, SECRET_KEY, algorithms="HS256")

        current_user = Account.query.filter_by(email=data["email"]).first()

        # get account id
        account_id = current_user.account_id

        frontend_data = json.loads(request.get_data())
        following_id = frontend_data["followingId"]

        follow_data = Following(
            follower_id=account_id,
            following_id=following_id,
        )

        db.session.add(follow_data)
        db.session.commit()

        follows_table = Following.query.all()
        return follows_table

    def delete(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401
        auth_token = request.headers.get("Authorization").split(" ")[1]

        data = jwt.decode(auth_token, SECRET_KEY, algorithms="HS256")

        current_user = Account.query.filter_by(email=data["email"]).first()

        # get account id
        account_id = current_user.account_id

        frontend_data = json.loads(request.get_data())
        following_id = frontend_data["followingId"]

        follow_data = Following.query.filter_by(
            follower_id=account_id, following_id=following_id
        ).first()

        db.session.delete(follow_data)
        db.session.commit()

        return "following record has been deleted"
