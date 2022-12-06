from flask_restful import Resource, marshal_with, fields
from modals.Comment import Comment
from modals.Account import Account

from config import db

commentsFields = {
    "id": fields.Integer,
    "comment_text": fields.String,
    "account_id": fields.Integer,
    "post_id": fields.Integer,
}


class get_comments(Resource):
    @marshal_with(commentsFields)
    def get(self):
        comments = Comment.query.all()

        return comments
