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

from modals.Like import Like
from config import db

likeFields = {
    "account_id": fields.Integer,
    "post_id": fields.Integer,
}


class users_like(Resource):
    @marshal_with(likeFields)
    def get(self):
        likes = Like.query.all()
        return likes
