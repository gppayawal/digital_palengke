var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

router.get('/logout', studentController.logout);
router.post('/invest', studentController.invest)
module.exports = router;
