/**
 * Created by HP on 04-08-2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var optionSchema = new Schema({
    optionName : {
        type : String,
        required : true,
    },
    optionCount : {
        type : Number,
        default : 0
    }
});

module.exports.Options = mongoose.model('Option', optionSchema);;
module.exports.optionSchema = optionSchema;
