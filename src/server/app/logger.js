const winston = require('winston');
const moment = require('moment');

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      level: 'silly',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.timestamp({
          timestamp: moment().format('lll')
        })
        // , winston.format.prettyPrint()
      ),
      humanReadableUnhandledException: true
    })
  ]
});

module.exports = logger;
