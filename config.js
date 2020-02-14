const gitToken = process.env.GIT_TOKEN;
if (!gitToken) throw new Error('GitHub auth token not set');

module.exports = {
  targetPath: './tmp',
  repoPath: `https://tf3:${gitToken}@github.com/tf3/vaccha.git`,
  contentPath: './tmp/content',
  baseURL: 'http://thomasfoerster.ca',
  bucketName: 'alpha-lambda-01',
  targetFileName: 'index-01.html'
};
