const util = require('util');
const clone = util.promisify(require('git-clone'));
const { targetPath, repoPath } = require('./config');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const createHTMLFromMetadata = require('./createHTMLFromMetadata');
const writeHTMLToS3Bucket = require('./writeHTMLToS3Bucket');

// TODO: check event to ensure it's actually from the webhook

exports.handler = (event, context) => (
  clone(repoPath, targetPath)
    .then(getMetadataOfNewestPost)
    .then(createHTMLFromMetadata)
    .then(writeHTMLToS3Bucket)
    .then(res => { console.log(res); return res; })
    .catch(console.error)
);
