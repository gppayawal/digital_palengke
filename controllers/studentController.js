var fs = require('fs');

module.exports = {
	invest: function(req, res){
		console.log('investing....');
		var products = require('../public/products.json');
		console.log(products);
		var i = req.body.index;

		products[i].investments = parseInt(products[i].investments) + parseInt(req.body.value);


	    fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
	      if(err){
	        console.log(err);
	        throw err;
	      }
	    });

	    res.json({status: 200});
	},

	checkout: function(req, res){
		console.log('checking out...');
	},

	logout: function(req, res){
		res.redirect('/');
	}
}