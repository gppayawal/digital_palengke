var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');

router.post('/addproduct', adminController.addproduct);

module.exports = router;