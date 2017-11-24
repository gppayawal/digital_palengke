var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

router.get('/logout', studentController.logout);
router.post('/invest', studentController.invest)
router.post('/login', studentController.loginstudent);
router.get('/products', studentController.getProducts);
module.exports = router;
