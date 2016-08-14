/**
 * Created by HP on 09-08-2016.
 */

//temp -- later shift to a seperate module
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/users');
var config = require('./config');

module.exports = function(passport){
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    passport.use(new LocalStrategy({usernameField : 'email', passwordField : 'password'},User.authenticate()));
    passport.use(new FacebookStrategy({
        clientID        : config.facebookAuth.clientID,
        clientSecret    : config.facebookAuth.clientSecret,
        callbackURL     : config.facebookAuth.callbackURL
    },
    function(token, refreshToken, profile, done){
        process.nextTick(function(){
            User.findOne({ 'username' : profile.name.givenName }, function(err, user){
                if (err)
                    return done(err); // user not found
                if (user) {
                    return done(null, user); // user found, return that user
                }else{
                    var newUser = new User();
                    newUser.username = profile.name.givenName;
                    newUser.email = "djsc@lkvs.com"//profile.emails[0].value;
                    newUser.token = token;
                    newUser.password = "";

                    // save user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
};
