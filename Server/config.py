from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

SECRET_KEY = "secretkey"
# SQLALCHEMY_DATABASE_URI = "sqlite:///igclonedb.db"
SQLALCHEMY_DATABASE_URI = f"postgresql://postgres:password@localhost/instagram_clone"

db = SQLAlchemy()
bcrypt = Bcrypt()
