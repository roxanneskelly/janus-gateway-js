var Connection = require('./connection');

/**
 * @param {Object} options. {@link Connection.options}
 * @constructor
 */
function Client(options) {
  this._options = options || {};
}

/**
 * @param {string} id
 * @return {Promise}
 */
Client.prototype.createConnection = function(id) {
  var connection = Connection.create(id, this._options);
  return connection.open().return(connection);
};

module.exports = Client;
