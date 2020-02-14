const gitToken = process.env.GIT_TOKEN;
if (!gitToken) throw new Error('GitHub auth token not set');

module.exports = {
  targetPath: '/tmp',
  repoPath: `https://tf3:${gitToken}@github.com/tf3/vaccha/archive/master.zip`,
  zipDownloadPath: '/tmp/repo.zip',
  contentPath: '/tmp/vaccha-master/content',
  baseURL: 'http://thomasfoerster.ca',
  bucketName: 'alpha-lambda-01',
  targetFileName: 'index-01.html'
};
