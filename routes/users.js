var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Users = require('./../models/users');

router.use(express.static(path.join(__dirname,'/../', 'public')));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.route('/')
    .get(function(req, res, next){
        // can be used in Ajax request when user signup, to verify that email is already registered or not
        //todo
    })
    .post(function(req, res, next){
        Users.create(req.body, function(err, user){
            if(err) throw err;
            console.log('user added....');
            res.render('pages/newpoll', {'title':'VoteCenter - Dashboard', 'username' : user.name});
        })
    });

router.route('/:userId')
    .post(function(req, res, next){
        Users.update({name : req.params.userId}, { password: req.body.newPassword }, { multi: true }, function(err, numAffected){
            if(err) throw err;
            res.render('pages/newpoll', {'title':'VoteCenter - Dashboard', 'username' : req.params.userId});
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

router.post('/dashboard', function (req, res, next) {
    res.render('pages/newpoll', {'title':'VoteCenter - Dashboard'});
});

router.post('/changepassword', function(req, res, next){
    console.log('password changed');
});
router.get('/:userId/settings', function(req, res, next){
    res.render('pages/settings', {'title':'VoteCenter - Settings', 'username' : req.params.userId});
});

module.exports = router;
