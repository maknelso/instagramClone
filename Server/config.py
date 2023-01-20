from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

load_dotenv()

username = os.getenv("USER_NAME")
password = os.getenv("PASSWORD")
aws_rds_uri = os.getenv("AWS_RDS_URI")
db_name = os.getenv("DB_NAME")

SECRET_KEY = "secretkey"
# SQLALCHEMY_DATABASE_URI = "sqlite:///igclonedb.db"
# SQLALCHEMY_DATABASE_URI = f"postgresql://postgres:password@localhost/instagram_clone"
SQLALCHEMY_DATABASE_URI = (
    f"postgresql://{username}:{password}@{aws_rds_uri}:5432/{db_name}"
)

db = SQLAlchemy()
bcrypt = Bcrypt()
