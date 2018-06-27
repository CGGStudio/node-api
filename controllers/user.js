'use strict'

function loginUser(req, res){

var username = req.params.username;
var password = req.params.password;

	res.status(200).send({
		data: username,
	});
}


function getUser(req, res){
	var id = req.params.id;
	res.status(200).send({
		data: id,
	});
}

function getUsers(req, res){
  connection.query('SELECT * from users', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//Hay un error a la hora de conectarse a la BBDD
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//Se envian todos los usuarios
	  	}
	});
}

function saveUser(req, res){
	var params = req.body;
	res.status(200).send({
    album: params
  });
}

function updateUser(req, res){
	var params = req.body;
	res.status(200).send({
    album: params
  });
}

function deleteUser(req, res){
	var id = req.params.id;
	res.status(200).send({
		data: id,
	});
}

module.exports = {
  loginUser,
  getUser,
  getUsers,
  saveUser,
  updateUser,
  deleteUser
}

