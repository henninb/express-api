import express from 'express'
// import cors from 'cors'
// import morgan from 'morgan'
// import bodyParser from 'body-parser'
// import compression from 'compression'
// import customLogger from '../utils/logger'

export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()

  // gzip responses
  // router.use(compression())

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  router.get('/', (_request, response) => {
    const html_payload = `
    <html>
      <head>
        <!-- <link rel="stylesheet" href="style.css"> -->
        <!-- <script src="script.js"></script> -->
        <title>serverless</title>
      </head>
      <body>
        <h1>Express via '${functionName}'</h1>

        <div> <a href='/.netlify/functions/${functionName}/users'>View /users route</a> </div>
        <div> <a href='/.netlify/functions/${functionName}/hello'>View /hello route</a> </div>
        <div> <a href='/.netlify/functions/${functionName}/cookie'>View /cookie route</a> </div>

      </body>
    </html>
  `
    response.send(html_payload)
  })

  router.get('/users', (_request, response) => {
    response.json({
      users: [ { name: 'steve', },
        { name: 'joe', },
      ],
    })
  })

  router.get('/cookie', function(_request, response) {

  // Set the session cookie in the response
  response.setHeader('Set-Cookie', 'session=' + '1234');

  // Send the response data
  response.send('Response data');
  });

  router.get('/hello/', function(_reqquest, response) {
    response.send('hello world')
  })

  app.use(routerBasePath, router)

  // Apply express middlewares
  // router.use(cors())
  // router.use(bodyParser.json())
  // router.use(bodyParser.urlencoded({ extended: true }))

  return app
}
