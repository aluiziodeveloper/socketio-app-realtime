var mongoose = require('mongoose');
var connection;

module.exports = function () {
    if (!connection) {
        connection = mongoose.connect('mongodb://localhost/curso_socket_io', {useMongoClient: true});
    }
    return connection;
}
