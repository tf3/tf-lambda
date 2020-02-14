const util = require('util');
const fs = require('fs');
const clone = util.promisify(require('git-clone'));

const targetPath = './tmp';
const repoPath = 'https://github.com/tf3/vaccha.git';
const contentPath = targetPath + '/content';

const lineStartsWithKey = (line, key) => (
  line.slice(0, key.length + 2) === `${key}: `
);

const getValueFromPost = (post, key) => {
  const lines = post.toString().split('\n');
  const matchingLine = lines.find(line => lineStartsWithKey(line, key));

  if (!matchingLine) return null;
  const value = matchingLine.slice(key.length + 2);
  return value.trim();
}

const getDateFromPost = post => {
  const dateString = getValueFromPost(post, 'date');
  if (!dateString) return null;
  return new Date(dateString);
};

const getTitleFromPost = post => getValueFromPost(post, 'title');

const getMetadataOfNewestPost = () => {
  const postFileNames = fs.readdirSync(contentPath);
  const posts = postFileNames.map(fileName => ({
    content: fs.readFileSync(`${contentPath}/${fileName}`),
    fileName
  }));

  const postMetadata = posts.map(({content, fileName}) => ({
    title: getTitleFromPost(content),
    date: getDateFromPost(content),
    fileName
  }));

  const filteredMetadata = postMetadata.filter(({ date }) => Boolean(date));
  const sortedAndFilteredMetadata = filteredMetadata.sort((p1, p2) => p2.date - p1.date);
  return sortedAndFilteredMetadata[0];
};

const handleCloneSuccess = () => {
  const metadataOfNewestPost = getMetadataOfNewestPost();
  console.log(metadataOfNewestPost);
  const HTML = createHTML(metadataOfNewestPost);
  console.log(HTML);
};

const formatDate = date => date.toISOString().slice(0, 10);

const createHTML = ({ title, date, fileName }) => {
  const baseURL = 'http://thomasfoerster.ca';
  const today = new Date();
  const postUrl = `${baseURL}/${fileName.slice(0, -3)}` //remove the ".md" extension

  return `<p>hey<p><a href="${postUrl}">${title}</a> (${formatDate(date)}) [${formatDate(today)}]`;
}

clone(repoPath, targetPath)
  .then(handleCloneSuccess)
  .catch(console.error);

// handleCloneSuccess();