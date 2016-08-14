/**
 * Created by HP on 09-08-2016.
 */
module.exports = {
    secret : '12345-67891-23456-78912',
    mongoUrl : "mongodb://chirag:admin@ds031835.mlab.com:31835/vote_test",
    facebookAuth : {
        clientID      : '1790826791129210', // App ID
        clientSecret  : '8be8a8b825367deaab4b01890e4d0454', // App Secret
        callbackURL   : 'https://vote-center.herokuapp.com/users/facebook/callback'
    },
};