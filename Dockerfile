FROM node:lts-alpine3.9


WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

ADD . /usr/src/app

RUN cd /usr/src/app && \
  npm install && \
  npm run build

EXPOSE 8080
CMD [ "node", "dist/server.js" ]
