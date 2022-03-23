var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersController")

var loginValidator = require('../validations/loginValidator');
var registerValidator = require('../validations/registerValidator');
var editUserValidator = require('../validations/editUserValidator');

var uploadAvatar = require("../middlewares/uploadAvatar")

let userCheck = require('../middlewares/userCheck');
const { editUser } = require('../controllers/usersController');
const userAdminCheck = require('../middlewares/userAdminCheck');

/* GET - Login and Register */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/logout', userCheck, usersController.logout)
 
/* POST - Login and Register */
router.post('/login', loginValidator, usersController.processLogin);
router.post('/register', registerValidator, usersController.processRegister);

/* GET - Profile User */
router.get("/profileUser/:id", userCheck, usersController.profileUser);

/* PUT - Profile User */
router.get("/editUser/:id", userCheck, usersController.editUser)
/* router.get("/editUser", usersController.listProvinces) */

router.put("/editUser/:id", uploadAvatar.single("image"), editUserValidator, userCheck, usersController.updateUser);

/* router.put("/editUser", usersController.listProvinces) */

router.delete("/deleteUser/:id", userAdminCheck, usersController.delete)

router.put('/hacerAdmin/:id', userAdminCheck, usersController.admin)


module.exports = router;
