/**
 * Created by HP on 09-08-2016.
 */
module.exports = {
    secret : '12345-67891-23456-78912',
    mongoUrl : "mongodb://chirag:admin@ds031835.mlab.com:31835/vote_test",
    facebookAuth : {
        clientID      : '1762753370661281', // App ID
        clientSecret  : 'b5a8af8779471624e15176b716a3c867', // App Secret
        callbackURL   : 'https://vote-center.herokuapp.com/users/facebook/callback'
    },
};