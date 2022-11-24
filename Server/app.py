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
# new import for search
from handler.users_search import users_search
from config import db, bcrypt
from modals.Account import Account
from modals.Following import Following
from modals.Post import Post
from modals.Like import Like

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
# new - search fx
api.add_resource(users_search, '/api/instagram/<username>')


if __name__ == '__main__':
    app.run(debug=True)
