const app = require('./app/app');
const log = require('./app/logger');

const server = app.listen(process.env.PORT || 4000, () => {
  const host = server.address().address;
  const port = server.address().port;
  log.verbose(`The current Node env is ${ process.env.NODE_ENV }`);
  log.info(`Ultimate Tic-Tac-Toe is now listening on ${ host } at ${ port }`);
});
