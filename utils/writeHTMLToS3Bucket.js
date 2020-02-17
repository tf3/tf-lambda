const AWS = require('aws-sdk');
const { bucketName, targetFileName } = require('../config');

const S3 = new AWS.S3();

const createS3ObjectFromHTML = html => ({
  Bucket: bucketName,
  ContentType: 'text/html',
  Body: html,
  Key: targetFileName
});

const writeHTMLToS3Bucket = html => (
  S3.putObject(createS3ObjectFromHTML(html)).promise()
);

module.exports = writeHTMLToS3Bucket;
