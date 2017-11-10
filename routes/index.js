var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	res.sendFile('index.html', { root: __dirname + '/../src/'});
});

router.get('/admin', function(req, res, next){
	res.sendFile('admin.html', { root: __dirname + '/../src/'});
});

router.get('/student', function(req, res, next){
	res.sendFile('student.html', { root: __dirname + '/../src/'});
});

module.exports = router;
