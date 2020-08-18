// This file is great for defining general purpose routes, e.g., 
// the root route.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Skill List' });
});

module.exports = router;
