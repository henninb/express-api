module.exports = (_request, response) => {
  response.status(200).json({ message: 'Hello vercel!' });
};
