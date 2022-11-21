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

# users_login route is used to login existing users
loginFields = {
    "token": fields.String
}

userFields = {
    "account_id": fields.Integer,
    "email": fields.String,
    "name": fields.String,
    "username": fields.String,
    "password": fields.String,
    "avatar": fields.String,

}


class users_login(Resource):
    @marshal_with(userFields)
    def get(self):
        user = Account.query.all()
        return user

    @marshal_with(loginFields)
    def post(self):
        # get data from user
        data = json.loads(request.get_data())

        # if user does not enter email or password
        if not data['email'] or not data['password']:
            return "Please enter the required fields", 400

        # grab all the info from email (password is especially important)
        user_login = Account.query.filter_by(email=data['email']).first()

        # check password
        pw_hash = user_login.password
        # compare user's entered password (hashed) versus the queried account's hashed password in our db
        if not bcrypt.check_password_hash(pw_hash, data['password']):
            return "User or password is incorrect", 400
        else:
            # user has entered valid email and password, now we generate a jwt token for the user
            token = jwt.encode(
                {'email': data['email'], 'exp': datetime.datetime.utcnow(
                ) + datetime.timedelta(minutes=90)}, SECRET_KEY, algorithm="HS256")

            # print(token)
            response = {
                'token': token
            }

            return response

# users_current route is used to authenticate the JWT received from frontend is valid
