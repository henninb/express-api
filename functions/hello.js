const app = require('../index');

exports.handler = async (event, context) => {
  const response = await app(event, context);
  return response;
};

