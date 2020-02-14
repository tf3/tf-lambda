const fetch = require('node-fetch');
const { repoPath } = require('./config');
const saveResult = require('./saveResult');
const unzipFile = require('./unzipFile');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const createHTMLFromMetadata = require('./createHTMLFromMetadata');
const writeHTMLToS3Bucket = require('./writeHTMLToS3Bucket');

// TODO: check event to ensure it's actually from the webhook

exports.handler = (event, context) => (
  fetch(repoPath)
    .then(saveResult)
    .then(unzipFile)
    .then(getMetadataOfNewestPost)
    .then(createHTMLFromMetadata)
    .then(writeHTMLToS3Bucket)
    .then(res => { console.log(res); return res; })
    .catch(err => { console.error(err); throw err; })
);
