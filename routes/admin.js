var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');

router.post('/addproduct', adminController.addproduct);
router.get('/logout', adminController.logout);
module.exports = router;