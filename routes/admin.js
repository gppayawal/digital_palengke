var express = require('express');
var router = express.Router();

var path = require('path')
var multer = require('multer')

var storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

var upload = multer({ storage: storage })

var adminController = require('../controllers/adminController');

router.post('/addproduct', upload.single('image'), adminController.addproduct);
router.get('/logout', adminController.logout);
module.exports = router;