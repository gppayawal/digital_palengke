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
    try{
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

      res.status(200).json({status: 200, product:data});
    }catch(err){
      console.log(err);
      res.status(500).json({status: 500});
    }
	},
  
  delete: function(req, res){
    try{
      var products = require('../public/products.json');
      var index = -1;
      for(var i = 0; i < products.length ; i++){
        if(products[i].productName == req.body.name)
          index = i;
      }

      if(index == -1)
        res.send({status:404});
      else{
        products.splice(index, 1);
        fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
          if(err){
            console.log(err);
            throw err;
          }
        });
        res.send({status:200});
      }
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
    req.session.reset();
    res.redirect('/');
	}
}
