from flask_restful import Resource, marshal_with, fields
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


class get_single_comment(Resource):
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
