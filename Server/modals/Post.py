from config import db


class Post(db.Model):
    post_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))
    img_url = db.Column(db.String(250))
    img_description = db.Column(db.String(250))
    likes = db.relationship("Like", backref="post")
    comments = db.relationship("Comment", backref="post")

    # def __repr__(self):
    #     return '<User %r>' % self.username
