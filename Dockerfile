FROM node:12.16.3

WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app/package.json

RUN npm install

COPY index.js /app

EXPOSE 4000
