from flask_restful import Resource, marshal_with, fields
import jwt
import json
from flask import Flask, request, abort, jsonify
from config import SECRET_KEY, db
from modals.Account import Account
from modals.Post import Post


postFields = {
    "account_id": fields.Integer,
    "img_url": fields.String,
    "img_desc": fields.String,
}


class generate_post(Resource):
    @marshal_with(postFields)
    def post(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401

        auth_token = request.headers.get("Authorization").split(" ")[1]

        data = jwt.decode(auth_token, SECRET_KEY, algorithms="HS256")

        current_user = Account.query.filter_by(email=data["email"]).first()

        # get account id
        account_id = current_user.account_id

        frontend_data = json.loads(request.get_data())

        # get iamge url
        filename = frontend_data["filename"]
        feedDesc = frontend_data["feedDesc"]
        img_url = f"https://instagramclone-2022.s3.us-west-1.amazonaws.com/upload/123/{filename}"
        img_description = feedDesc

        current_post = Post(
            account_id=account_id,
            img_url=img_url,
            img_description=img_description,
        )

        db.session.add(current_post)
        db.session.commit()

        posts = Post.query.all()
        return posts
