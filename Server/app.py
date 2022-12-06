import json
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table
# from sqlalchemy.orm import declarative_base, relationship
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
import jwt
import datetime
import config
from handler.user_protected import users_protect
from handler.users_login import users_login
from handler.users_reg import users_reg
from handler.users_like import users_like
from handler.get_comments import get_comments
from handler.get_single_comment import get_single_comment
from handler.users_search import users_search
from config import db, bcrypt
from modals.Account import Account
from modals.Following import Following
from modals.Post import Post
from modals.Like import Like
from modals.Comment import Comment

app = Flask(__name__)
app.config.from_object(config)
db.init_app(app)

api = Api(app)

migrate = Migrate(app, db)


with app.app_context():
    db.create_all()

# users_reg route is used to register new users


api.add_resource(users_reg, '/api/register')
api.add_resource(users_login, '/api/login')
api.add_resource(users_protect, '/api/protect')
api.add_resource(users_like, '/api/like')
api.add_resource(get_comments, '/api/comments')
api.add_resource(get_single_comment, '/api/comment/<postid>')
api.add_resource(users_search, '/api/instagram/<username>')


if __name__ == '__main__':
    app.run(debug=True)
