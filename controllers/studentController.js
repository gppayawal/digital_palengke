var fs = require('fs');
var pins = [
  {
   "studentNumber": "2013-09935",
   "pin": "09935LHFQT",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-04243",
   "pin": "04243TDMYV",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-22420",
   "pin": "22420BPTDB",
   "pitchDay": 1
 },
 {
   "studentNumber": "2017-67036",
   "pin": "67036JTXMX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-09901",
   "pin": "09901HMQGN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2013-06133",
   "pin": "06133FDYJX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-13140",
   "pin": "13140KTGNK",
   "pitchDay": 2
 },
 {
   "studentNumber": "2013-60752",
   "pin": "60752BJMNH",
   "pitchDay": 1
 },
 {
   "studentNumber": "2017-67038",
   "pin": "67038JNWCR",
   "pitchDay": 2
 },
 {
   "studentNumber": "2017-67037",
   "pin": "67037WLMTX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2017-67029",
   "pin": "67029KCLBH",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-02733",
   "pin": "02733BGLYN",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-02018",
   "pin": "02018KJHPX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2012-38789",
   "pin": "38789RQGFF",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-02291",
   "pin": "02291MMTKP",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-00909",
   "pin": "00909LGCXB",
   "pitchDay": 2
 },
 {
   "studentNumber": "2013-36660",
   "pin": "36660YHDLJ",
   "pitchDay": 2
 },
 {
   "studentNumber": "2010-57138",
   "pin": "57138KLPWL",
   "pitchDay": 1
 },
 {
   "studentNumber": "2013-09476",
   "pin": "09476DGVLW",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-72640",
   "pin": "72640TDMBJ",
   "pitchDay": 2
 },
 {
   "studentNumber": "2013-69291",
   "pin": "69291QNWKX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-09836",
   "pin": "09836MWDNT",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-08972",
   "pin": "08972FNCHY",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-10533",
   "pin": "10533LRLBP",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-08900",
   "pin": "08900XFVRP",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-09145",
   "pin": "09145QLTFL",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-09888",
   "pin": "09888DVYYG",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-02215",
   "pin": "02215WLCBY",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-01067",
   "pin": "01067WGMXN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65696",
   "pin": "65696MKHYK",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-14257",
   "pin": "14257WWNRN",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-83970",
   "pin": "83970FKBXN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-44757",
   "pin": "44757MBJMB",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-62177",
   "pin": "62177PKMQL",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-09843",
   "pin": "09843MMQYL",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-12902",
   "pin": "12902GMVML",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-26818",
   "pin": "26818GKHTC",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-09583",
   "pin": "09583WYLXW",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-65128",
   "pin": "65128YLXJX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-71724",
   "pin": "71724XXHLP",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-35300",
   "pin": "35300RXDKX",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-10208",
   "pin": "10208PQKKF",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-02360",
   "pin": "02360WQNFL",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-70671",
   "pin": "70671PCKCY",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-05542",
   "pin": "05542GCKFK",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-50895",
   "pin": "50895JDJPN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65569",
   "pin": "65569XJLBT",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-01222",
   "pin": "01222JPKRB",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-01926",
   "pin": "01926PPRDT",
   "pitchDay": 2
 },
 {
   "studentNumber": "2013-21524",
   "pin": "21524DTVMV",
   "pitchDay": 1
 },
 {
   "studentNumber": "2012-20020",
   "pin": "20020VRWFX",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-02438",
   "pin": "02438HMBQD",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-01245",
   "pin": "01245NNMYP",
   "pitchDay": 1
 },
 {
   "studentNumber": "2013-09008",
   "pin": "09008GJGQC",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-05246",
   "pin": "05246HGQYK",
   "pitchDay": 1
 },
 {
   "studentNumber": "2017-01426",
   "pin": "01426KCDFP",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65638",
   "pin": "65638YYJWF",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-09792",
   "pin": "09792GDRGT",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-08938",
   "pin": "08938VVJHV",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-10176",
   "pin": "10176YNDGG",
   "pitchDay": 1
 },
 {
   "studentNumber": "2011-31422",
   "pin": "31422FMMVM",
   "pitchDay": 2
 },
 {
   "studentNumber": "2009-46960",
   "pin": "46960WGPYL",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-10926",
   "pin": "10926FXLMT",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-10013",
   "pin": "10013PRXHY",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-65316",
   "pin": "65316RDTCL",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-19250",
   "pin": "19250PBBRG",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-44618",
   "pin": "44618GXTRT",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-50901",
   "pin": "50901HNYWN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-72663",
   "pin": "72663KCMVP",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-65410",
   "pin": "65410HLHFT",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-05930",
   "pin": "05930HXWCY",
   "pitchDay": 2
 },
 {
   "studentNumber": "2013-06298",
   "pin": "06298JQBJK",
   "pitchDay": 2
 },
 {
   "studentNumber": "2012-37661",
   "pin": "37661HNHBH",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-55117",
   "pin": "55117BJWYG",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-27451",
   "pin": "27451KKHWG",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65621",
   "pin": "65621WDQFJ",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-11837",
   "pin": "11837KMHHN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-04075",
   "pin": "04075GPGHX",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-07040",
   "pin": "07040PNMWP",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-14568",
   "pin": "14568TXXQX",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-10142",
   "pin": "10142DBHKX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2014-08898",
   "pin": "08898NHCFL",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-65885",
   "pin": "65885LPXRX",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-66095",
   "pin": "66095MYMRG",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65618",
   "pin": "65618LHTYF",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65636",
   "pin": "65636KTCHK",
   "pitchDay": 1
 },
 {
   "studentNumber": "2015-65729",
   "pin": "65729YKKHV",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-71444",
   "pin": "71444JVDKB",
   "pitchDay": 1
 },
 {
   "studentNumber": "2010-03213",
   "pin": "03213NVQMN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2010-18109",
   "pin": "18109NBMCR",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-01405",
   "pin": "01405RMBMM",
   "pitchDay": 1
 },
 {
   "studentNumber": "2014-29464",
   "pin": "29464FWGHF",
   "pitchDay": 2
 },
 {
   "studentNumber": "2015-65592",
   "pin": "65592PGPBN",
   "pitchDay": 1
 },
 {
   "studentNumber": "2017-00307",
   "pin": "00307KJKNT",
   "pitchDay": 42
 },
 {
   "studentNumber": "2005-04997",
   "pin": "04997YYYYY",
   "pitchDay": 42
 }
];

module.exports = {
	loginstudent: function(req, res){
		console.log(req.body);
	}, 

	invest: function(req, res){
		var products = require('../public/products.json');
		console.log(req.body);
		var i = req.body.index;

		var product = products[i];
		product.investments = parseInt(product.investments) + parseInt(req.body.value);

	    fs.writeFile('public/products.json', JSON.stringify(products, null, 4), (err) => {
	      if(err){
	        console.log(err);
	        throw err;
	      }
	    });

	    console.log(product);
	    res.json({status: 200, message: "Successfully invested $" + req.body.value + " in " + product.productName});
	},

	checkout: function(req, res){
		console.log('checking out...');
	},

	logout: function(req, res){
		res.redirect('/');
	}
}