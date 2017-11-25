var express = require('express');
var router = express.Router();
var multer = require('multer');
var adminController = require('../controllers/adminController');

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './public/uploads/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

router.post('/login', adminController.loginadmin);
router.post('/addproduct', upload.single('imageFile'), adminController.addproduct);
router.get('/logout', adminController.logout);
module.exports = router;