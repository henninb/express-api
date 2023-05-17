module.exports.handler = async (_event, _context) => {
  const response = {
    statusCode: 200,
    headers: {
      'Set-Cookie': 'myCookie=exampleValue; Path=/;'
    },
    body: JSON.stringify({
      users: [
        { name: 'steve' },
        { name: 'joe' }
      ]
    })
  };

  return response;
};
