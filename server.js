//const axios = require('axios');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const axios = require('axios');
const createProxyMiddleware = require('http-proxy-middleware');

// const cors = require('cors');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key


const port = 8080;
const app = express();

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

const server = https.createServer(options, app);

// app.use(favicon(__dirname + '/public/favicon.ico'));

const proxyOptions = {
  target: 'https://www.bathandbodyworks.com',
  changeOrigin: true,
  headers: {
    accept: "application/json",
    method: "POST",
  },
};

const apiProxy = createProxyMiddleware(proxyOptions);
app.use('/external-api', apiProxy);

app.use(morgan('combined'));
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: 'http://example.com', // allow requests from a specific origin
//     methods: 'GET,POST', // allow only GET and POST requests
//     allowedHeaders: 'Content-Type,Authorization', // allow only specific headers
//   })
// );

// website that will be allowed to connect
// app.use(cors({origin: 'http://localhost:3000'}));
//app.use('/', express.static(path.join(__dirname, './build')));
app.use(function (_request, response, next) {
  // express.static(path.join(__dirname, 'public'));
  // bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000})
  // express.json();
  // console.log('set content security policy header');
  //response.setHeader('Content-Security-Policy', updatedCSP);
  response.setHeader('Content-Security-Policy', "default-src 'self' http: https:;");
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
}));


server.listen(port, () => {
  console.log(`app is listening to port ${port} with https`);
});

// app.listen(port, (_request, _response, _next) => {
  // console.log(`app is listening to port ${port} with http`);
// });

//let apiKey = fs.readFileSync(path.join(__dirname, "apikey"));

//curl -X POST localhost:8080/api/login
// app.post('/api/login', async(_request, response) => {
//   response.status(200)
//   .header('Content-Type', 'application/json')
//   .send({ key: 'POST' });
// });


// curl -X POST -H "Content-Type: application/json" -d '{"username": "admin", "password": "password"}' http://localhost:8080/api/login
// curl -X POST -H "Content-Type: application/json" -d '{"email": "henninb", "password": "monday1"}' http://localhost:3000/api/login
app.post('/api/login', async (request, response) => {
  const { email, password } = request.body;
  // Perform authentication logic here
  if (email === 'henninb' && password === 'monday1') {
    const token = jwt.sign({ email }, secretKey);

    response.status(200)
      .header('Content-Type', 'application/json')
      .send({ message: 'Authentication successful', token });
  } else {
    const errorMessage = 'Invalid email or password';
    response.status(401)
      // .header('Content-Type', 'application/json')
      .json({ error: errorMessage });
      // .send({ message: 'Authentication failed' });
  }
});

//curl -X GET localhost:8080/api/login
app.get('/api/login', async(_request, response) => {
  response.status(200)
  .header('Content-Type', 'application/json')
  .send({ key: 'GET' });
});

app.get('/account/:accountId', async(request, response) => {
  const accountId = request.params.accountId;
  response.status(200)
  .header('Content-Type', 'application/json')
  .send({ key: 'account-'+ accountId });
});

app.get('/account/active', async(_request, response) => {
  response.status(200)
  .header('Content-Type', 'application/json')
  .send({ key: 'account-active' });
});


const postData = async () => {
  const url = 'https://www.bathandbodyworks.com/my-account?dwcont=C1799660522';
  const data = {
    dwfrm_login_username: 'henninb+1980@gmail.com',
    dwfrm_login_password: '',
    dwfrm_login_securekey: '',
    dwfrm_login_login: 'x',
    format: 'ajax'
  };

  const headers = {
    'User-Agent': 'Your Custom User Agent'
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log("success");
    console.log(response.status);
    // console.log(response.data);
  } catch (error) {
    console.log("failure");
    console.log(error.response.status);
    // console.error(error);
  }
};

//https://www.bathandbodyworks.com/my-account?dwcont=C1799660522
// /my-account?dwcont=C1799660522
app.post('/my-account', async (request, response) => {
  const { dwcont } = request.query;
  postData();

  response.status(200).json({ dwcont });
});

app.post('/api/celsius', async(request, response) => {
  const { fahrenheit } = request.body;

  const celsius = (fahrenheit - 32) * 5/9;

  response.status(200).json({ celsius });
});

app.post('/api/fahrenheit', async (request, response) => {
  const { celsius } = request.body;
  //TODO: add error handling
  // if (typeof celsius !== 'number') {
  //   response.status(400).json({ error: 'Invalid input. Celsius value must be a number.' });
  //   return;
  // }

  const fahrenheit = (celsius * 9/5) + 32;

  response.status(200).json({ fahrenheit });
});
