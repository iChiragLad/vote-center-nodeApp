/**
 * Created by HP on 09-08-2016.
 */
module.exports = {
    secret : '12345-67891-23456-78912',
    mongoUrl : "mongodb://chirag:admin@ds031835.mlab.com:31835/vote_test",
    facebookAuth : {
        clientID      : '227737080956498', // App ID
        clientSecret  : 'bd28a0a121c57c8d65fcc31f3cf042e3', // App Secret
        callbackURL   : 'https://vote-center.herokuapp.com/users/facebook/callback'
    },
};