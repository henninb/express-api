module.exports.handler = async (_event, _context) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
    },
    body: JSON.stringify({
      message: 'Hello, CSP!'
    })
  };

  return response;
};
