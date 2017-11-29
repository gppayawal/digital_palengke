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
				if(student.checkout)
					res.send({status: 400});
				else{
					req.session.student = student;
					res.send({status:200});
				}
			}
			else{
				res.send({status:404});
			}
		}catch(err){
			console.log(err);
			res.send({status:500});
		}
	}, 

	checkout: function(req, res){
		try{
			var records = require('../public/pins.json');
			var student = null;

			records.forEach(function(record){
				if(record.studentNumber == req.session.student.studentNumber)	{
					student = record;
				}
			});
			if(student){
				student.checkout = true;	

	      fs.writeFile('public/pins.json', JSON.stringify(records, null, 4), (err) => {
	        if(err){
	          console.log(err);
	          throw err;
	        }
      	});

      	res.send({status:200});
			}
			else{
				res.send({status:404});
			}
		}catch(err){
			console.log(err);
			res.send({status:500});
		}
	},

	invest: function(req, res){
		try{
			var investments = JSON.parse(req.body.investments); 
			var products = require('../public/products.json');
			var data = '';
			
			Object.keys(investments).forEach(function(key){
				var index = -1;
				for(var i = 0 ; i < products.length ; i++){
					if(products[i].productName == key){
						index = i;
					}
				}

				if(index != -1){
					var product = products[index];
					product.investments = parseInt(product.investments) + parseInt(investments[key]);
					data += req.session.student.studentNumber + ' ' + key + ' $' + investments[key].formatMoney(0) + '\n';
				}
			});

    	fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
	      	if(err){
	        console.log(err);
	        throw err;
	      	}
    	});

	    fs.appendFile('public/investments.txt', data, function(err){
	    if(err){
	        console.log(err);
	        throw err;
	      }
	    });
	    res.json({status: 200});
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
		res.json({array:results, investments: req.session.student.investments});
	},

	update: function(req, res){
		try{
			var records = require('../public/pins.json');
			var student = null;

			records.forEach(function(record){
				if(record.studentNumber == req.session.student.studentNumber)	{
					student = record;
				}
			});
			if(student){
				student.investments = JSON.parse(req.body.investments);
				req.session.student = student;	

	      fs.writeFile('public/pins.json', JSON.stringify(records, null, 4), (err) => {
	        if(err){
	          console.log(err);
	          throw err;
	        }
      	});

      	res.send({status:200});
			}
			else{
				res.send({status:404});
			}
		}catch(err){
			console.log(err);
			res.send({status:500});
		}
	},

	logout: function(req, res){
		req.session.reset();
    	res.redirect('/');
	}
}

Number.prototype.formatMoney = function(c, d, t){
  var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};