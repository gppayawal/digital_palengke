var fs = require('fs');
var products = require('../public/products.json');

module.exports = {
	addproduct: function(req, res){
    var data = {};
    

    data.groupNumber = req.body.groupNumber;
    data.productName = req.body.productName;
    data.productDesc = req.body.productDesc;
    data.imageFile = req.body.imageFile;
    console.log(data);

    products.push(data);
    fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
      if(err){
        console.log(err);
        throw err;
      }
    });

    res.json({status: 200, size:products.length});
	},

	logout: function(req, res){
		res.redirect('/');
	}
}
