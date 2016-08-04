var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Users = require('./../models/users');


router.use(express.static(path.join(__dirname,'/../', 'public')));
router.use(bodyParser.json());

/* GET users listing. */
router.post('/dashboard', function (req, res, next) {
  res.render('pages/newpoll', {'title':'VoteCenter - Dashboard'});
});

router.route('/')
.get(function(req, res, next){
  Users.find({}, function(err, user){
    if(err) throw err;

    //fetch polls from user
    //todo
    //display polls to html
    res.render('pages/newpoll', {'title':'VoteCenter - Dashboard', 'userdata' : user});
  });

})
    .delete(function(req, res, next){
      //remove the requested poll from already existing user document
      //todo
      //redirect to /users/ (get)
      //todo
    })
    .put(function(req, res, next){
      //abstract ---> increment the particular vote count
    })
.post(function(req, res, next){
  console.log(req.body);

  //insert(push) poll on already existing user document
  //todo
  //display the link to reach the poll on HTML page
  //todo
});

router.get('/:userparam/:questionparam', function(req, res, next){
  //get the user by using userparam parameter
  //todo
  //fetch the required question from the user document fetched before
  //todo
  //display the poll data in HTML page
  //todo
});

router.post('/changepassword', function(req, res, next){
    console.log('password changed');
});


module.exports = router;
