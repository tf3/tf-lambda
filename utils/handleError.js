const handleError = (error, statusCode = 500) => {
  console.error(error);
  const body = { success: false, errorMessage: error.message };

  return { statusCode, body: JSON.stringify(body) };
};

module.exports = handleError;
