/**
 * Created by HP on 04-08-2016.
 */
var mongoose = require('mongoose');
var pollSchema = require('./polls').pollSchema;
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var usersSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : String,
    polls : [pollSchema]
});

usersSchema.plugin(passportLocalMongoose, {usernameField : 'email'});

module.exports = mongoose.model('User', usersSchema);
