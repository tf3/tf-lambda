const fetch = require('node-fetch');
const { repoPath } = require('./config');
const {
  createHTMLFromMetadata,
  getMetadataOfNewestPost,
  handleError,
  saveResult,
  signatureIsValid,
  unzipFile,
  writeHTMLToS3Bucket
} = require('./utils');

exports.handler = async event => {
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