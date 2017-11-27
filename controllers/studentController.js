var fs = require('fs');

module.exports = {
	loginstudent: function(req, res){
		try{
			var records = require('../public/pins.json');
			var student = null;

			records.forEach(function(record){
				if(record.pin_code == req.body.pin)	{
					student = record;
				}
			});
			if(student){
				delete student.pin_code;
				req.session.student = student;
				res.send({status:200});
			}
			else{
				res.send({status:404});
			}
		}catch(err){
			res.send({status:500});
		}
	}, 

	invest: function(req, res){
		try{
			var products = require('../public/products.json');
			var index = -1;

			for(var i = 0 ; i < products.length ; i++){
				if(products[i].productName == req.body.name){
					index = i;
				}
			}
			if(index == -1){
				res.json({status:404});
			} else {
				var product = products[index];
				product.investments = parseInt(product.investments) + parseInt(req.body.value);

	    	fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
		      	if(err){
		        console.log(err);
		        throw err;
		      	}
	    	});

		    var data = req.session.student.studentNumber + ' ' + req.body.name + ' ' + req.body.value + '\n';
		    fs.appendFile('public/investments.txt', data, function(err){
		    if(err){
		        console.log(err);
		        throw err;
		      }
		    });
		    res.json({status: 200, message: "Successfully invested $" + req.body.value + " in " + product.productName});
			}
		}catch(err){
			console.log(err);
			res.json({status: 500});
		}
	},

	getProducts: function(req, res){
		var day1 = ['1','2','3','7','10','12','14','17','18'];
		var day2 = ['4','5','6','8','11','13','15','16'];

		var products = require('../public/products.json');		
		var productGroup = req.session.student.pitchDay == 1? day2 : day1;
		var results = [];
		products.forEach(function(product){
			if(productGroup.indexOf(product.groupNumber) != -1){
				results.push(product);
			}
		});
		res.json(results);
	},

	logout: function(req, res){
		req.session.reset();
    	res.redirect('/');
	}
}