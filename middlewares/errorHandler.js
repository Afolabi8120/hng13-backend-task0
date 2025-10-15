export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  let error = { ...err };
  error.message = err.message;

  if (err.isAxiosError) {
    error.message = 'Cat Fact API service unavailable';
    error.statusCode = 503;
  }

  res.status(error.statusCode || 500).json({
    status: 'error',
    message: error.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
};

