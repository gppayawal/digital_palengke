var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.session);
	if(req.session.student)
		res.redirect('/student');
	else if(req.session.admin)
		res.redirect('/admin');
	else
		res.sendFile('index.html', { root: __dirname + '/../src/'});
});

router.get('/admin', function(req, res, next){
	if(req.session.admin)
		res.sendFile('admin.html', { root: __dirname + '/../src/'});
	else
		res.redirect('/');
});

router.get('/student', function(req, res, next){
	console.log(req.session)
	if(req.session.student)
		res.sendFile('student.html', { root: __dirname + '/../src/'});
	else
    	res.redirect('/');

});

module.exports = router;
