from flask_restful import Resource, marshal_with, fields
import logging
import boto3
import jwt
from botocore.exceptions import ClientError
from flask import Flask, request, abort, jsonify
import json
from config import SECRET_KEY, db
from modals.Account import Account


uploadFields = {
    "res": fields.String,
}


class generate_upload_URL(Resource):
    @marshal_with(uploadFields)
    def get(self):
        if not request.headers.get("Authorization"):
            return jsonify({"message": "Please login"}), 401

        auth_token = request.headers.get("Authorization").split(" ")[1]

        data = jwt.decode(auth_token, SECRET_KEY, algorithms="HS256")

        current_user = Account.query.filter_by(email=data["email"]).first()
        print(current_user.username)

        current_user_name = current_user.username
        # get filename
        filename = request.args.get("filename")

        # init s3 client
        s3_client = boto3.client("s3")
        try:
            # get presigned url
            response = s3_client.generate_presigned_post(
                "instagramclone-2022",
                f"upload/{current_user_name}/" + filename,
                ExpiresIn=3600,
            )
            # separate the folder name after upload/ so on AWS S3 there will be a folder for each user
            print(response)
        # handle error
        except ClientError as e:
            logging.error(e)

            # return failed response
            return abort(400)

        # return successful response
        return {"res": json.dumps(response)}
