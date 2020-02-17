const handleWriteSuccess = bucketInfo => ({
  body: JSON.stringify({
    success: true,
    message: 'Bucket updated successfully',
    ETag: bucketInfo.ETag
  }),
  statusCode: 200
});

module.exports = handleWriteSuccess;
