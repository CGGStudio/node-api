var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');

router.get('/login', UserController.loginUser);
router.get('/user/:id', UserController.getUser);
router.get('/users', UserController.getUsers);
router.post('/user', UserController.saveUser);
router.put('/user', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);


module.exports = router;
