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
from config import bcrypt
from modals.Account import Account
from modals.Post import Post
from modals.Following import Following
from config import db

# create an outline of what the data should look like (the names of the fields and their types)

userFields = {
    "account_id": fields.Integer,
    "email": fields.String,
    "name": fields.String,
    "username": fields.String,
    "password": fields.String
}

# the marshall_with decorator encodes data to send back to the user as JSON


class users_reg(Resource):
    @marshal_with(userFields)
    def get(self):
        users = Account.query.all()
        return users

    @marshal_with(userFields)
    def post(self):
        data = json.loads(request.get_data())
        # to check if user enters any of these input
        if not data['email'] or not data['name'] or not data['username'] or not data['password']:
            return "Please enter all required fields", 400
        hashedPassword = bcrypt.generate_password_hash(data['password'])
        user = Account(email=data['email'], name=data['name'],
                       username=data['username'], password=hashedPassword)
        db.session.add(user)
        db.session.commit()
        users = Account.query.all()
        return users

