const util = require('util');
const clone = util.promisify(require('git-clone'));
const getMetadataOfNewestPost = require('./getMetadataOfNewestPost');
const { targetPath, repoPath } = require('./config');

const formatDate = date => date.toISOString().slice(0, 10);

const createHTMLFromMetadata = ({ title, date, fileName }) => {
  const baseURL = 'http://thomasfoerster.ca';
  const today = new Date();
  const postUrl = `${baseURL}/${fileName.slice(0, -3)}` // remove the ".md" extension

  return `<p>hey<p><a href="${postUrl}">${title}</a> (${formatDate(date)}) [${formatDate(today)}]`;
};

// const writeHTMLToS3Bucket = () => {};

clone(repoPath, targetPath)
  .then(getMetadataOfNewestPost)
  .then(createHTMLFromMetadata)
  .then(console.log)
  .catch(console.error);
