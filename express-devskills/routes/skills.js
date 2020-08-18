// This file is an example of a router dedicated 
// to a resource, in this case, users.
const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


/* GET users listing. */
router.get('/', skillsCtrl.index)
module.exports = router;
