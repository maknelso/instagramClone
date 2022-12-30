from flask_restful import Resource, marshal_with, fields
import logging
import boto3
from botocore.exceptions import ClientError
from flask import Flask, request

uploadFields = {
    "url": fields.String,
}


class generate_upload_URL(Resource):
    @marshal_with(uploadFields)
    def get(self):
        print(request.args)
        object_name = request.args.get("filename")
        """Generate a presigned URL to share an S3 object

      :param bucket_name: string
      :param object_name: string
      :param expiration: Time in seconds for the presigned URL to remain valid
      :return: Presigned URL as string. If error, returns None.
      """

        # Generate a presigned URL for the S3 object
        s3_client = boto3.client("s3")
        try:
            response = s3_client.generate_presigned_url(
                "put_object",
                Params={"Bucket": "instagramclone-2022", "Key": object_name},
                ExpiresIn=3600,
                HttpMethod="put"
            )
        except ClientError as e:
            logging.error(e)
            return None

        # The response contains the presigned URL
        return {"url": response}
