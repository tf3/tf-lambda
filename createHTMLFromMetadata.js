const { baseURL } = require('./config');

const formatDate = date => date.toISOString().slice(0, 10);

const createHTMLFromMetadata = ({ title, date, fileName }) => {
  const today = new Date();
  const postUrl = `${baseURL}/${fileName.slice(0, -3)}` // remove the ".md" extension

  return `<p>hey<p><a href="${postUrl}">${title}</a> (${formatDate(date)}) [${formatDate(today)}]`;
};

module.exports = createHTMLFromMetadata;
