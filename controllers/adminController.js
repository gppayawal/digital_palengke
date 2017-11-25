var fs = require('fs');

module.exports = {
    loginadmin: function(req, res){
       try{
            var keys = require('../public/adminpass.json');
            var admin = null;
            keys.forEach(function(key){
                if(key.password == req.body.password){
                    admin = key;
                }
            });
            if(admin){
                req.session.admin = admin;
                console.log(req.session);
                res.send({status:200});
            }
            else{
                res.send({status:404});
            }
       } catch(err){
            res.send({status:500});
       }
    },

	addproduct: function(req, res){
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

	logout: function(req, res){
        req.session.reset();
		res.redirect('/');
	}
}
