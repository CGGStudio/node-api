var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * from users', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//Hay un error a la hora de conectarse a la BBDD
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//Se envian todos los usuarios
	  	}
	});
});

module.exports = router;
