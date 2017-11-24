var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

router.get('/logout', studentController.logout);
router.post('/invest', studentController.invest)
router.get('/loginstudent', studentController.loginstudent);
module.exports = router;
