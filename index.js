const util = require('util');
const clone = util.promisify(require('git-clone'));
const { targetPath, repoPath } = require('./config');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const createHTMLFromMetadata = require('./createHTMLFromMetadata');

// const writeHTMLToS3Bucket = () => {};

clone(repoPath, targetPath)
  .then(getMetadataOfNewestPost)
  .then(createHTMLFromMetadata)
  .then(console.log)
  .catch(console.error);
