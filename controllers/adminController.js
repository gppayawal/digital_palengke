var fs = require('fs');

var jsonData = {};

module.exports = {
	addproduct: function(req, res){
		var data = {};
		
		data.groupNumber = req.body.groupNumber;
		data.productName = req.body.productName;
		data.productDesc = req.body.productDesc;
		data.imageFile = req.body.imageFile;

		console.log(data);

		fs.appendFile('./products.txt', JSON.stringify(data), (err) => {
			if(err){
				console.log(err);
				throw err;
			}
			console.log("file has been created");
		});

		res.json({status: 200});
	}
}