const git = require('nodegit');
const { targetPath, repoPath } = require('./config');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const createHTMLFromMetadata = require('./createHTMLFromMetadata');
const writeHTMLToS3Bucket = require('./writeHTMLToS3Bucket');

// TODO: check event to ensure it's actually from the webhook

exports.handler = (event, context) => (
  git.Clone(repoPath, targetPath)
    .then(getMetadataOfNewestPost)
    .then(createHTMLFromMetadata)
    .then(writeHTMLToS3Bucket)
    .then(res => { console.log(res); return res; })
    .catch(err => { console.error(err); throw err; } )
);
