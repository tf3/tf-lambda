const handleError = error => {
  console.error(error);
  return { success: false, error };
};

module.exports = handleError;
