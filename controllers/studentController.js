var fs = require('fs');

module.exports = {
	invest: function(req, res){
		var products = require('../public/products.json');
		console.log(req.body);
		var i = req.body.index;

		var product = products[i];
		product.investments = parseInt(product.investments) + parseInt(req.body.value);

	    fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
	      if(err){
	        console.log(err);
	        throw err;
	      }
	    });

	    console.log(product);
	    res.json({status: 200, message: "Successfully invested $" + req.body.value + " in " + product.productName});
	},

	checkout: function(req, res){
		console.log('checking out...');
	},

	logout: function(req, res){
		res.redirect('/');
	}
}