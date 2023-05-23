const axios = require('axios');
const express = require('express');
const path = require('path');
const fs = require("fs");
//const cors = require('cors');
const bodyParser = require('body-parser');

const updatedCSP = "default-src 'unsafe-eval' 'unsafe-inline' * blob:; script-src 'unsafe-inline' 'unsafe-eval' * blob:; img-src * data:; connect-src *; font-src * data:; upgrade-insecure-requests; block-all-mixed-content"

const port = 8080;
const app = express();

// website that will be allowed to connect
// app.use(cors({origin: 'http://localhost:3000'}));
//app.use('/', express.static(path.join(__dirname, './build')));
app.use(function (request, response, next) {
  // express.static(path.join(__dirname, 'public'));
  // bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000})
  // express.json();
  // console.log('set content security policy header');
  response.setHeader('Content-Security-Policy', updatedCSP);
  next();
});

app.use( express.static(path.join(__dirname, 'public')) );
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.use(express.json());


app.listen(port, (_request, _response, _next) => {
  console.log(`app is listening to port ${port}`);
});

let apiKey = fs.readFileSync(path.join(__dirname, "apikey"));

//curl -X POST localhost:8080/api/login
app.post('/api/login', async(_request, response) => {
  response.status(200).send("{\"key\"=\"post\"}");
});

//curl -X GET localhost:8080/api/login
app.get('/api/login', async(_request, response) => {
  console.log('call with headers.');
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey.toString().trim()}`
  };

  response.status(200).send("{\"key\"=\"get\"}");

});
