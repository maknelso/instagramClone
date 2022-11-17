from config import db

class Following(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    follower_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))
    following_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))