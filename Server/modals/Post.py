from config import db

class Post(db.Model):
    post_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))
    img_url = db.Column(db.String(250))
    # like_post_child = db.relationship("Like")

    def __repr__(self):
        return '<User %r>' % self.username