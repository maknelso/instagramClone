from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

SECRET_KEY = '....your secret key ....'
SQLALCHEMY_DATABASE_URI = "sqlite:///igclonedb.db"
db = SQLAlchemy()
bcrypt = Bcrypt()