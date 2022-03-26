var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController");
let upload = require('../middlewares/uploadProductFile');
const productFormValidator = require('../validations/productFormValidator');
const userAdminCheck = require('../middlewares/userAdminCheck');
const { admin } = require('../controllers/usersController');

/* GET home page. */
router.get('/',userAdminCheck, adminController.admin);

/* GET show creation form */
router.get('/crear', userAdminCheck, adminController.createProducts);
/* POST send form */
router.post('/store', upload.array('image'), userAdminCheck, productFormValidator, adminController.store);

/* GET show edit form */
router.get('/editar/:id', adminController.editProducts);
/* PUT send edit form */
router.put('/editar/:id', upload.array('image'), userAdminCheck, productFormValidator, adminController.update);

router.delete('/eliminar/:id', userAdminCheck, adminController.delete)
/* GET search products */
router.get('/buscar', userAdminCheck, adminController.search)
/* Get admin Users */
router.get('/usuarios', userAdminCheck, adminController.users)
/* Get search users */
router.get('/buscar/usuario', userAdminCheck, adminController.searchUsers)
module.exports = router;
