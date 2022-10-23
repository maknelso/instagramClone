import json
from flask import Flask, request
from flask_restful import Resource, Api, marshal_with, fields
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
api = Api(app)

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

userFields = {
    "account_id": fields.Integer,
    "email": fields.String,
    "name": fields.String,
    "username": fields.String,
    "password": fields.String
}


class users(Resource):
    @marshal_with(userFields)
    def get(self):
        users = Account.query.all()
        return users

    @marshal_with(userFields)
    def post(self):
        data = json.loads(request.get_data())
        user = Account(email=data['email'], name=data['name'],
                       username=data['username'], password=data['password'])
        db.session.add(user)
        db.session.commit()
        users = Account.query.all()
        return users


api.add_resource(users, '/api/register')


if __name__ == '__main__':
    app.run(debug=True)
