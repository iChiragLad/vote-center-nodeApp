var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {'title' : 'VoteCenter - Get opinions instantly'});
});

router.get('/login', function(req, res, next) {
  res.render('pages/login', {'title' : 'VoteCenter - Login'});
});

router.get('/signup', function(req, res, next) {
  res.render('pages/signup', {'title' : 'VoteCenter - Sign up'});
});

module.exports = router;
