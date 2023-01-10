from config import db

# associate table between Account and Follow
follow = db.Table(
    "follow",
    db.Column(
        "account_id", db.Integer, db.ForeignKey("account.account_id"), primary_key=True
    ),
    db.Column("follow_id", db.Integer, db.ForeignKey("following.id"), primary_key=True),
)


class Account(db.Model):
    account_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(25), unique=True, nullable=False)
    name = db.Column(db.String(50), unique=False, nullable=False)
    username = db.Column(db.String(25), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    avatar = db.Column(db.String(200), unique=False, nullable=True)

    posts = db.relationship("Post", backref="account")
    follow = db.relationship("Following", secondary=follow)
    likes = db.relationship("Like", backref="account")
    comments = db.relationship("Comment", backref="account")
