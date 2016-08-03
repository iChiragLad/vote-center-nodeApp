var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

router.use(express.static(path.join(__dirname,'/../', 'public')));
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/dashboard', function(req, res, next){
  console.log(req.body);
  res.render('pages/dashboard', {'title':'VoteCenter - Dashboard'});
});

module.exports = router;
