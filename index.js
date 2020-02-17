const fetch = require('node-fetch');
const signatureIsValid = require('./signatureIsValid');
const { repoPath } = require('./config');
const saveResult = require('./saveResult');
const unzipFile = require('./unzipFile');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const createHTMLFromMetadata = require('./createHTMLFromMetadata');
const writeHTMLToS3Bucket = require('./writeHTMLToS3Bucket');
const handleError = require('./handleError');

exports.handler = async (event, context) => {
  if (!signatureIsValid(event)) {
    return handleError('Invalid signature');
  }

  return fetch(repoPath)
    .then(saveResult)
    .then(unzipFile)
    .then(getMetadataOfNewestPost)
    .then(createHTMLFromMetadata)
    .then(writeHTMLToS3Bucket)
    .catch(handleError)
};