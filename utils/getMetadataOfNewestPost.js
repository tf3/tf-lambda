const { readFileSync, readdirSync } = require('fs');
const { contentPath } = require('../config');

const lineStartsWithKey = (line, key) => (
  line.slice(0, key.length + 2) === `${key}: `
);

const getValueFromPost = (post, key) => {
  const lines = post.toString().split('\n');
  const matchingLine = lines.find(line => lineStartsWithKey(line, key));

  if (!matchingLine) return null;
  const value = matchingLine.slice(key.length + 2);
  return value.trim();
};

const getDateFromPost = post => {
  const dateString = getValueFromPost(post, 'date');
  if (!dateString) return null;
  return new Date(dateString);
};

const getTitleFromPost = post => getValueFromPost(post, 'title');

const getContentsOfAllPosts = () => {
  const postFileNames = readdirSync(contentPath);

  return postFileNames.map(fileName => ({
    content: readFileSync(`${contentPath}/${fileName}`),
    fileName
  }));
};

const getMetadataOfAllPosts = () => {
  const posts = getContentsOfAllPosts();

  return posts.map(( {content, fileName }) => ({
    title: getTitleFromPost(content),
    date: getDateFromPost(content),
    fileName
  }));
};

const getPostDateDifference = (p1, p2) => p2.date - p1.date;

const getMetadataOfNewestPost = () => {
  const metadataOfAllPosts = getMetadataOfAllPosts();
  const filteredMetadata = metadataOfAllPosts.filter(({ date }) => Boolean(date));
  const sortedAndFilteredMetadata = filteredMetadata.sort(getPostDateDifference);

  return sortedAndFilteredMetadata[0];
};

module.exports = getMetadataOfNewestPost;