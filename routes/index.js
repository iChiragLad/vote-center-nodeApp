var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {'title' : 'VoteCenter - Get opinions instantly'});
});
router.get('/login', function(req, res, next) {
  res.render('pages/login', {'title' : 'VoteCenter - Login', message: req.flash('message')});
});
router.get('/signup', function(req, res, next) {
  res.render('pages/signup', {'title' : 'VoteCenter - Sign up', message: req.flash('signupMessage')});
});
router.get('/settings', function(req, res, next){
  res.render('pages/settings', {'title' : 'VoteCenter - Change password'});
});
router.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
});


router.get('/poll', function(req, res, next){
  res.render('pages/poll');
});




module.exports = router;
