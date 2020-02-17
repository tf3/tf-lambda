const zip = require('adm-zip');
const { zipDownloadPath, zipExtractPath } = require('../config');

const unzipFile = () => {
  const zippedFile = new zip(zipDownloadPath);
  zippedFile.extractAllTo(zipExtractPath);
};

module.exports = unzipFile;