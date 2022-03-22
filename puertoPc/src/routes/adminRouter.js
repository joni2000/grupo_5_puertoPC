var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController");
let upload = require('../middlewares/uploadProductFile');
const productFormValidator = require('../validations/productFormValidator');
const userAdminCheck = require('../middlewares/userAdminCheck')

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

/* Get admin Users */
router.get('/users', userAdminCheck, adminController.users)

module.exports = router;
