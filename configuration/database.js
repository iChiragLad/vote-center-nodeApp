/**
 * Created by HP on 09-08-2016.
 */
module.exports = function(mongoose, config){

    //connecting to mongoDB
    mongoose.connect(config.mongoUrl);
    var db = mongoose.connection;
    db.on('error', function () {
        console.log('error connecting to db.......');
    });
    db.once('open', function () {
        console.log('Connected to db......');
    });
};

