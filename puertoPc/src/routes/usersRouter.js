var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersController")
var loginValidator = require('../validations/loginValidator');
var registerValidator = require('../validations/registerValidator');
let userCheck = require('../middlewares/userCheck')

/* GET - Login and Register */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/logout', userCheck, usersController.logout)
 
/* POST - Login and Register */
router.post('/login', loginValidator, usersController.processLogin);
router.post('/register', registerValidator, usersController.processRegister);

/* GET - Profile User */
router.get("/profileUser", usersController.profileUser);

/* PUT - Profile User */
router.get("/editUser", usersController.editUser)
router.put("/editUser/:id", usersController.updateUser);

module.exports = router;
