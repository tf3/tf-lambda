const fetch = require('node-fetch');
const { repoPath } = require('./config');
const {
  createHTMLFromMetadata,
  getMetadataOfNewestPost,
  handleError,
  handleWriteSuccess,
  saveResult,
  signatureIsValid,
  unzipFile,
  writeHTMLToS3Bucket
} = require('./utils');

exports.handler = async event => {
  if (!signatureIsValid(event)) {
    return handleError(new Error('Invalid signature'), 403);
  }

  return fetch(repoPath)
    .then(saveResult)
    .then(unzipFile)
    .then(getMetadataOfNewestPost)
    .then(createHTMLFromMetadata)
    .then(writeHTMLToS3Bucket)
    .then(handleWriteSuccess)
    .catch(handleError)
};