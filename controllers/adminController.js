var fs = require('fs');

module.exports = {
    loginadmin: function(req, res){
       var password = "sunflower";
       if(req.body == password){
            console.log('yey');
       } else console.log('no');
       res.json({status: 200});
    },

	addproduct: function(req, res){
        console.log(req.body);
        console.log(req.file);

        var data = {};
        data.groupNumber = req.body.groupNum;
        data.productName = req.body.productName;
        data.productDesc = req.body.productDesc;
        data.imageFile = req.file.originalname;
        data.investments = 0;
        
        var products = require('../public/products.json');
        products.push(data);

        fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
          if(err){
            console.log(err);
            throw err;
          }
        });

        res.json({status: 200});
	},

	logoutadmin: function(req, res){
		res.redirect('/');
	}
}
