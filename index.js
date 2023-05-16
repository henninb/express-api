const express = require('express')
const app = express()
const port = 3000

app.use((_request, response, next) => {
  console.log("set header");
  response.header("x-powered-by", "ExpressJS");
  next();
});

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.get('/api/test', (_request, response) => {
  const jsonData = { message: 'testing' };
  response.json(jsonData);
});

app.get('/api/date', (_request, response) => {
  const currentDate = new Date();
  const jsonData = { date: currentDate };
  response.json(jsonData);
});


app.get('/api/cookie', (_request, response) => {
  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Cookie expires in 7 days
  };
  response.cookie('cookieName', 'cookieValue', options);
  response.send('Cookie set!');
});


app.listen(port, () => { console.log(`Example app listening on port ${port}`) });
