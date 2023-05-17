module.exports.handler = async (_event, _context) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      currentDate: formattedDate
    })
  };

  return response;
};

