import json
import jwt
from flask import request, jsonify
from flask_restful import Resource, marshal_with, fields
from config import SECRET_KEY, db
from modals.Comment import Comment
from modals.Account import Account


from config import db

commentsFields = {
    "id": fields.Integer,
    "comment_text": fields.String,
    "account_id": fields.Integer,
    "post_id": fields.Integer,
    "avatar": fields.String,
    "username": fields.String
}

all_commentsFields = {
    "id": fields.Integer,
    "comment_text": fields.String,
    "account_id": fields.Integer,
    "post_id": fields.Integer,
}


class get_comment(Resource):
    @marshal_with(commentsFields)
    def get(self, postid):
        # comments = Comment.query.all()
        comment = Comment.query.filter_by(post_id=postid).all()

        users = Account.query.all()

        for each_user in users:
            for each_comment in comment:
                if each_comment.account_id == each_user.account_id:
                    each_comment.avatar = each_user.avatar
                    each_comment.username = each_user.username

        return comment


class post_comment(Resource):
    @marshal_with(all_commentsFields)
    def post(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401

        auth_token = request.headers.get("Authorization")
        # auth_token = request.headers.get("Authorization").split(" ")[1]

        try:
            data = jwt.decode(
                auth_token, SECRET_KEY, algorithms="HS256")

            current_user = Account.query.filter_by(email=data['email']).first()

            account_id = current_user.account_id

            data = json.loads(request.get_data())

            comment = Comment(
                comment_text=data['comment'], account_id=account_id, post_id=data['post_id'])

            db.session.add(comment)
            db.session.commit()
            comments = Comment.query.all()

            return comments

        except Exception as e:
            print("err")
            print(e)
            # return jsonify({
            #     'message': 'Token is invalid !!'
            # }), 401
