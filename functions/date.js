module.exports.handler = async (_event, _context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      users: [
        { name: 'steve' },
        { name: 'joe' }
      ]
    })
  };

  return response;
};
