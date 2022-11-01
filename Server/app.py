import json
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
import jwt
import datetime

app = Flask(__name__)
api = Api(app)
bcrypt = Bcrypt(app)

# --- the one indicated in your settings.py, cut an paste it here
app.config['SECRET_KEY'] = '....your secret key ....'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///igclonedb.db"
db = SQLAlchemy(app)

# login++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
"""
    "email": "123@gmail.com",
    "name": "Nelson ",
    "username": "123",
    "password": "abc"
"""

# create an outline of what the data should look like (the names of the fields and their types)


class Account(db.Model):
    account_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(25), unique=True, nullable=False)
    name = db.Column(db.String(50), unique=False, nullable=False)
    username = db.Column(db.String(25), unique=True, nullable=False)
    password = db.Column(db.String(100), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


with app.app_context():
    db.create_all()

# users_reg route is used to register new users

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


# users_login route is used to login existing users
loginFields = {
    "token": fields.String
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
                ) + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'], algorithm="HS256")

            # print(token)
            response = {
                'token': token
            }

            return response

# users_current route is used to authenticate the JWT received from frontend is valid


currentFields = {
    "account_id": fields.Integer,
    "email": fields.String,
    "name": fields.String,
    "username": fields.String,
    "password": fields.String
}


class users_current(Resource):
    @marshal_with(currentFields)
    def get(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401
        auth_token = request.headers.get("Authorization").split(" ")[1]

        try:
            data = jwt.decode(
                auth_token, app.config['SECRET_KEY'], algorithms="HS256")
            current_user = Account.query.filter_by(email=data['email']).first()

        except:
            return jsonify({
                'message': 'Token is invalid !!'
            }), 401

        return current_user


api.add_resource(users_reg, '/api/register')
api.add_resource(users_login, '/api/login')
api.add_resource(users_current, '/api/current')


if __name__ == '__main__':
    app.run(debug=True)
