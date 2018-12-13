const shareDb = require('./connection');

exports.sharedb = shareDb.ShareDb;
exports.connection = shareDb.connection;

exports.init = (server) => {
  return shareDb.connection;
};
