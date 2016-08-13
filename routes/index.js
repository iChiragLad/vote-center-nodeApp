var express = require('express');
var router = express.Router();
var User = require('../models/users');
/* GET home page. */
//origin - home page
router.get('/', function(req, res, next) {
  res.render('pages/index', {'title' : 'VoteCenter - Get opinions instantly'});
});
//origin - login
router.get('/login', function(req, res, next) {
  res.render('pages/login', {'title' : 'VoteCenter - Login', message: req.flash('loginMessage')});
});
//origin - signup
router.get('/signup', function(req, res, next) {
  res.render('pages/signup', {'title' : 'VoteCenter - Sign up', message: req.flash('signupMessage')});
});
//origin - change password
router.get('/settings', function(req, res, next){
  res.render('pages/settings', {'title' : 'VoteCenter - Change password'});
});
//handler - logout
router.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
});
router.get('/share/:username/poll/:question', function(req, res, next){
  User.findOne({ 'username': req.params.username }, function (err, user) {
    if (err) throw err;
    for(var i in user.polls){
      //username is the variable of the username of the like you want to find
      if(user.polls[i].question == req.params.question){
        var option1 = user.polls[i].options[0];
        var option2 = user.polls[i].options[1];
      }
    }
    var optionNames = [];
    var optionCounts = [];
    optionNames.push(option1.optionName.toString());
    optionNames.push(option2.optionName.toString());
    optionCounts.push(option1.optionCount);
    optionCounts.push(option2.optionCount);
    process.nextTick(function(){
      res.render('pages/poll', {by : req.params.username, question : req.params.question, optionNames : optionNames, optionCounts : optionCounts});
    })
  });
});
router.post('/answer/:username/:question', function(req, res, next){
  User.findOne({ 'username': req.params.username }, function (err, user) {
    if (err) throw err;
    for(var i in user.polls){
      //username is the variable of the username of the like you want to find
      if(user.polls[i].question == req.params.question){
        if(req.body.selection === 'one'){
          user.polls[i].options[0].optionCount += 1;
        }
        else{
          user.polls[i].options[1].optionCount += 1;
        }
      }
    }
    user.save(function(err){
      if(err) throw err;
      console.log('Poll updated');
    });
    process.nextTick(function(){
      res.redirect('/share/' + req.params.username + '/poll/' + req.params.question);
    })
  });
});

module.exports = router;
