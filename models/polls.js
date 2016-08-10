/**
 * Created by HP on 04-08-2016.
 */
var mongoose = require('mongoose');
var optionSchema = require('./options').optionSchema;
var Schema = mongoose.Schema;

var pollSchema = new Schema({
    question : {
        type : String,
        required : true
    },
    options : [optionSchema]
});

var Polls = mongoose.model('Poll', pollSchema);

module.exports.Polls = Polls;
module.exports.pollSchema = pollSchema;
