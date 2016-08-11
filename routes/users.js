var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var User = require('../models/users');
var Poll = require('../models/polls').Polls;
var Option = require('../models/options').Options;
var passport = require('passport');

//router.use(express.static(path.join(__dirname,'/../', 'public')));

/* GET users listing. */

//handler - signup
router.post('/signup', function(req, res, next){
    console.log(req.body);
    User.register(new User({ email : req.body.email, username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            req.flash('signupMessage', 'Sorry. That username already exists. Try again.');
            res.redirect('/signup');
        }

        passport.authenticate('local', {failureFlash : true} )(req, res, function () {
            req.flash('signupMessage', 'Signed up successfully!! Please go to login and continue.');
            res.redirect('/signup');
        });
    });
});
//handler - login
router.post('/login', passport.authenticate('local', {failureRedirect: '/login', failureFlash: {type : 'loginMessage', message : 'Invalid username or password.'}}), function(req, res, next){
    console.log('Before redirection dashboard');
    res.redirect('/users/dashboard');
});
//origin - dashboard (newpoll)
router.get('/dashboard', isLoggedIn, function (req, res, next) {
    console.log('dashboard');
    res.render('pages/newpoll', {'title':'VoteCenter - Dashboard', username : req.user.username});
});




//handler - dashboard (newpoll) - Submit button press - show the link
router.post('/link', isLoggedIn, function (req, res, next) {
    //create options. create poll. attach options to poll. Find user. Attach poll to user. Save user.
    var option1 = new Option();
    option1.optionName = req.body.optionName1;
    var option2 = new Option();
    option2.optionName = req.body.optionName2;
    var poll = new Poll();
    poll.question = req.body.question;
    poll.options.push(option1);
    poll.options.push(option2);

    User.findOne({ 'username': req.user.username }, function (err, user) {
        if (err) throw err;
        user.polls.push(poll);
        user.save(function(err){
            if(err) throw err;
            console.log('Poll inserted');
        });
    });
    var address = encodeURI("http://localhost:3000/share/" + req.user.username + '/poll/' + req.body.question);
    console.log(address);
    res.render('pages/link', {'title':'VoteCenter - Share', username : req.user.username, link : address});
});
//origin - Display all polls
router.get('/allpolls', isLoggedIn, function (req, res, next) {
    res.render('pages/allpolls', {'title':'VoteCenter - Dashboard', username : req.user.username});
});






router.route('/')
    .get(function(req, res, next){
        // can be used in Ajax request when user signup, to verify that email is already registered or not
        //todo
    })
    .post(function(req, res, next){

    });

//handler - change password
router.route('/:userId')
    .post(function(req, res, next){
        console.log(req.body);
        User.findByUsername(req.user.email).then(function(user){
            if (user){
                user.setPassword(req.body.newPassword, function(){
                    user.save();
                    res.render('pages/newpoll', {'title':'VoteCenter - Dashboard', 'username' : req.params.userId});
                });
            } else {
                res.send('error while changing password');
            }
        },function(err){
            console.error(err);
        });
    });

router.route('/:userId/polls');

router.route('/:userId/polls/:pollId')
    .get(function(req, res, next){
        //get the user by using userparam parameter
        //todo
        //fetch the required question from the user document fetched before
        //todo
        //display the poll data in HTML page
        //todo
    });


router.get('/:userId/settings', isLoggedIn, function(req, res, next){
    res.render('pages/settings', {'title':'VoteCenter - Settings', 'username' : req.params.userId});
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    console.log('is Auth : ' + req.isAuthenticated());
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login page
    req.flash('loginMessage', 'Session over!! Login again and continue.')
    res.redirect('/login');
}

module.exports = router;
