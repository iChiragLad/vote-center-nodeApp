/**
 * Created by HP on 09-08-2016.
 */

//temp -- later shift to a seperate module
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');

module.exports = function(passport){
    // passport config -- move to seperate module
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());  
};
