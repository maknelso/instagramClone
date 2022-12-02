from config import db
from datetime import datetime


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    comment_text = db.Column(db.String, nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))
    post_id = db.Column(db.Integer, db.ForeignKey("post.post_id"))
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
