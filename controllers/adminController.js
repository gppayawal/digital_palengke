var fs = require('fs');

module.exports = {
	addproduct: function(req, res){
    var data = {};
    
    var products = require('../public/products.json');

    data.groupNumber = req.body.groupNumber;
    data.productName = req.body.productName;
    data.productDesc = req.body.productDesc;
    data.imageFile = req.body.imageFile;
    data.investments = 0;
    console.log(data);

    products.push(data);
    fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
      if(err){
        console.log(err);
        throw err;
      }
    });

    res.json({status: 200});
	},

	logout: function(req, res){
		res.redirect('/');
	}
}
