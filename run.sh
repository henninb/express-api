#!/bin/sh

echo npm init

echo 'http://localhost:3000'

npm install
echo npm start
docker stop express-api
docker rm -f express-api
docker rmi express-api
docker compose -f docker-compose.yml up -d
echo node server.js

exit 0
