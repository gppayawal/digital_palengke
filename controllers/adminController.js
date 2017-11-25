var fs = require('fs');

module.exports = {
	addproduct: function(req, res){
    var data = {};
    data.groupNumber = req.body.groupNum;
    data.productName = req.body.productName;
    data.productDesc = req.body.productDesc;
    data.imageFile = req.file.path;
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
  
  delete: function(req, res){
    try{
      res.send({status:200});
    }catch(err){
      res.send({status:500});
    }
  },

  login: function(req, res){
    try{
      if(req.body.password == 'password'){
        req.session.admin = {admin:true};
        res.send({status:200});
      }
      else{
        res.send({status:404});
      }
    }catch(err){
      res.send({status:500});
    }
  },

	logout: function(req, res){
		res.redirect('/');
	}
}
