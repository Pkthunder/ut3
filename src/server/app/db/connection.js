const ShareDb = require('sharedb');

const share = new ShareDb({
  disableDocAction: true,
  disableSpaceDelimitedActions: true
});
const connection = share.connect();

exports.ShareDb = share;
exports.connection = connection;