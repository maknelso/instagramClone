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

from modals.Comment import Comment
from modals.Account import Account

from config import db

commentsFields = {
    "id": fields.Integer,
    "comment_text": fields.String,
    "account_id": fields.Integer,
    "post_id": fields.Integer,
}


class posts_comments(Resource):
    @marshal_with(commentsFields)
    def get(self):
        comments = Comment.query.all()

        return comments
