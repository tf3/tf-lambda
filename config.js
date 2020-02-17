const gitToken = process.env.GIT_TOKEN;
if (!gitToken) throw new Error('GitHub auth token not set');

module.exports = {
  zipExtractPath: '/tmp', // where the zip file's contents will be extracted to
  repoPath: `https://tf3:${gitToken}@github.com/tf3/vaccha/archive/master.zip`,
  zipDownloadPath: '/tmp/repo.zip', // where the zip file will be downloaded to
  contentPath: '/tmp/vaccha-master/content', // path to the extracted blog's contents
  blogUrl: 'https://vaccha.com',
  bucketName: 'thomasfoerster.ca',
  targetFileName: 'index.html' // name of bucket file that will be created or updated
};
