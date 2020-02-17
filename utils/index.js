const createHTMLFromMetadata = require('./createHTMLFromMetadata');
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const handleError = require('./handleError');
const handleWriteSuccess = require('./handleWriteSuccess');
const saveResult = require('./saveResult');
const signatureIsValid = require('./signatureIsValid');
const unzipFile = require('./unzipFile');
const writeHTMLToS3Bucket = require('./writeHTMLToS3Bucket');

module.exports = {
  createHTMLFromMetadata,
  getMetadataOfNewestPost,
  handleError,
  handleWriteSuccess,
  saveResult,
  signatureIsValid,
  unzipFile,
  writeHTMLToS3Bucket
};
