const app = require('../index.js');

exports.handler = async (event, context) => {
  const response = await app(event, context);
  return response;
};

