const { createWriteStream } = require('fs');
const { zipDownloadPath } = require('./config');

const saveResult = res => (
  new Promise((resolve, reject) => {
    res.body.pipe(createWriteStream(zipDownloadPath))
      .on('close', () => resolve('File saved successfully'))
      .on('error', err => reject(err))
  })
);

module.exports = saveResult;
