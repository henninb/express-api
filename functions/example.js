
exports.handler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
{
      users: [
        {
          name: 'steve',
        },
        {
          name: 'joe',
        },
      ],
    }
      ),
  }
}
