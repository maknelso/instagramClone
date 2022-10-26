import json
from flask import Flask, request
from flask_restful import Resource, Api, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt


app = Flask(__name__)
api = Api(app)
bcrypt = Bcrypt(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///igclonedb.db"
db = SQLAlchemy(app)


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


# create an outline of what the data should look like (the names of the fields and their types)
userFields = {
    "account_id": fields.Integer,
    "email": fields.String,
    "name": fields.String,
    "username": fields.String,
    "password": fields.String
}

# the marshall_with decorator encodes data to send back to the user as JSON


class users(Resource):
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
        hasedPassword = bcrypt.generate_password_hash(data["password"])
        user = Account(email=data['email'], name=data['name'],
                       username=data['username'], password=hasedPassword)
        db.session.add(user)
        db.session.commit()
        users = Account.query.all()
        return users


api.add_resource(users, '/api/register')


if __name__ == '__main__':
    app.run(debug=True)


