const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const WebSocketJSONStream = require('websocket-json-stream');

const http = require('http');

const log = require('./logger');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 404 middleware handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = err;

  res.status(err.status || 404);
  res.send();
});

const server = http.createServer(app);
const db = require('./db');

// stub function call
db.init(server);

const wss = new WebSocket.Server({server: server});

wss.on('connection', (ws, req) => {
  const stream = new WebSocketJSONStream(ws);
  db.sharedb.listen(stream);
});

wss.on('open', () => {
  log.info('ShareDB WebSocket opened...');
});


// export express app instance
module.exports = server;