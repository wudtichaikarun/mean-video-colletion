var config = require('./config')
var mongoose = require('mongoose')

module.exports = function(){
    var db = mongoose.connect(config.uri);
    return db;
}