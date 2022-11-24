from config import db

# likes = db.Table('likes',
#                  db.Column('like_id', db.Integer, db.ForeignKey(
#                      'like.id'), primary_key=True),
#                  db.Column('post_id', db.Integer, db.ForeignKey(
#                      'post.post_id'), primary_key=True)
#                  )


class Post(db.Model):
    post_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    account_id = db.Column(db.Integer, db.ForeignKey("account.account_id"))
    img_url = db.Column(db.String(250))
    img_description = db.Column(db.String(250))
    # likes = db.relationship('Like')

    # def __repr__(self):
    #     return '<User %r>' % self.username
