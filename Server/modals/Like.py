from config import db
from datetime import datetime


class Like(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))
    post_id = db.Column(db.Integer, db.ForeignKey("post.post_id"))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
