var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' });
var products = require('../public/products.json');

module.exports = {
	addproduct: function(req, res){
    var data = {};
    
    try{
      upload.any();
    }catch(err){
      console.log(err);
    }
    var image = 'shit';

    data.groupNumber = req.body.groupNumber;
    data.productName = req.body.productName;
    data.productDesc = req.body.productDesc;
    data.imageFile = image;
    console.log(data);

    products.push(data);
    fs.writeFile('./public/products.json', JSON.stringify(products), (err) => {
      if(err){
        console.log(err);
        throw err;
      }
    });

    res.json({status: 200, size:products.length});
	}
}
