var express = require('express');
var router = express.Router();
var connection = require('../routes/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reg', { title: 'Express' });
});

router.post('/upload', function(req, res, next) {

	var signup_name = req.body.name;
	var signup_email = req.body.email;
	var signup_dob = req.body.dob;
	var signup_aadhar = req.body.aadhar;
	var signup_home = req.body.home;
	var signup_wallet = req.body.wallet;

	connection.query("SELECT * from `user_details` where email = '" + signup_email + "'", function(err, row, fields){	
		if(row.length == 0){
				connection.query("INSERT INTO `user`(`name`, `email`, `dob`, `adhaar`, `area`, `wallet`) VALUES ('"+signup_name+"', '"+signup_email+"', '"+signup_dob+"', '"+signup_aadhar+"', '"+signup_home+"', '"+signup_wallet+"')", function(err, row, fields){
				if(err){
					console.log(err);
				}
				else{
					res.send("yes");
				}
			});
			}else{
				res.send('email_exists');
			}
	});

});


module.exports = router;
