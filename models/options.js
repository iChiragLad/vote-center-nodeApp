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
        type : Number
        //required : true
    }
},{
    timestamp : true
});

var Options = mongoose.model('Option', optionSchema);

module.exports.Options = Options;
module.exports.optionSchema = optionSchema;
