var db = require('../libs/db_connection')();
var mongoose = require('mongoose');

module.exports = function (app) {
    var user_schema = mongoose.Schema({
        nome: {type: String, required: true},
        email: {type: String, required: true},
        nascimento: {type: String, required: true},
        celular: {type: Number, required: true}
    });
    return db.model('users', user_schema);
}
