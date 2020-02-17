const zip = require('adm-zip');
const { zipDownloadPath, targetPath } = require('../config');

const unzipFile = () => {
  const zippedFile = new zip(zipDownloadPath);
  zippedFile.extractAllTo(targetPath);
};

module.exports = unzipFile;