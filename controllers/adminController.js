var jsonData = {};

module.exports = {
	addproduct: function(req, res){
		var data = {
			'groupNumber': [req.body.groupNumber],
			'productName': [req.body.productName],
			'productDesc': [req.body.productDesc],
			'imageFile': [req.body.imageFile]
		}

		alert(JSONG.stringify(req));
	}
}