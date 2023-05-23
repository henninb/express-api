const express = require('express');
const app = express();

app.get('/hello', (_request, res) => {
  res.send('Hello, World!');
});

module.exports = app;
