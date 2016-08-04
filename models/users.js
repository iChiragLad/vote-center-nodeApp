/**
 * Created by HP on 04-08-2016.
 */
var mongoose = require('mongoose');
var pollSchema = require('./polls').pollSchema;
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    polls : [pollSchema]
},{
    timestamp : true
});

var Users = mongoose.model('User', usersSchema);

module.exports = Users;
