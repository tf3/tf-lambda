const fetch = require('node-fetch');
const signatureIsValid = require('./signatureIsValid');
const { repoPath } = require('./config');
const saveResult = require('./saveResult');
const unzipFile = require('./unzipFile');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const createHTMLFromMetadata = require('./createHTMLFromMetadata');
const writeHTMLToS3Bucket = require('./writeHTMLToS3Bucket');

exports.handler = (event, context) => {
  console.log('Event:', event);

  if (!signatureIsValid(event)) {
    console.log('Invalid signature');
    return 'Invalid signature';
  }

  return fetch(repoPath)
    .then(saveResult)
    .then(unzipFile)
    .then(getMetadataOfNewestPost)
    .then(createHTMLFromMetadata)
    .then(writeHTMLToS3Bucket)
    .then(res => { console.log(res); return res; })
    .catch(err => { console.error(err); throw err; })
};