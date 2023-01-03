from flask_restful import Resource, marshal_with, fields
import logging
import boto3
from botocore.exceptions import ClientError
from flask import Flask, request, abort
import json

uploadFields = {
    "res": fields.String,
}


class generate_upload_URL(Resource):
    @marshal_with(uploadFields)
    def get(self):
        # get filename
        filename = request.args.get("filename")

        # init s3 client
        s3_client = boto3.client("s3")
        try:
            # get presigned url
            response = s3_client.generate_presigned_post(
                "instagramclone-2022", "upload/" + filename, ExpiresIn=3600
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
