var fs = require('fs');
var products = require('../public/products.json');

module.exports = {
	invest: function(req, res){
		console.log('investing....');
	},

	checkout: function(req, res){
		console.log('checking out...');
	},

	logout: function(req, res){
		res.redirect('/');
	}
}