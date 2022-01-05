var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersController")
var loginValidator = require('../validations/loginValidator');
var guestMiddleware = require('../middlewares/guestMiddleware');

/* GET - Login and Register */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get("/profileUser", usersController.profileUser)

/* POST - Login and Register */
router.post('/login', loginValidator ,usersController.processLogin);
router.post('/register', usersController.createUser);

module.exports = router;
