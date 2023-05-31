#!/bin/sh

echo npm init

npm install
echo npm start
docker stop express-api
docker rm -f express-api
docker rmi express-api
docker compose -f docker-compose.yml up -d
echo node server.js

exit 0
