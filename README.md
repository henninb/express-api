# Express API

An Express.js API server that can run standalone or as Netlify Functions (serverless). Features HTTP/2 support, JWT authentication, reverse proxy middleware, and HTTPS via self-signed certificates.

## Tech Stack

- Node.js / Express
- Netlify Functions (`serverless-http`)
- JWT authentication (`jsonwebtoken`)
- Reverse proxy (`http-proxy-middleware`)
- HTTP/2 support
- Morgan request logging

## Setup

Install dependencies:

```bash
npm install
```

Generate SSL certificates:

```bash
./cert-install.sh
```

## Running

### Standalone Express

```bash
./run.sh
```

Or:

```bash
node server.js
```

Server runs on port `8080` with HTTPS.

### Netlify Functions

```bash
netlify dev
```

Functions are in the `functions/` directory and include:

| Function | Description |
|----------|-------------|
| `hello.js` | Simple hello world |
| `cookie.js` | Cookie handling |
| `csp.js` | Content-Security-Policy demo |
| `date.js` | Date/time endpoint |
| `example.js` | Example function |
| `serverless.js` | Serverless wrapper |

## Deployment

Deploy to Netlify:

```bash
netlify deploy --prod
```
