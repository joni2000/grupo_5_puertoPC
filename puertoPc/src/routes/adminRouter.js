var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController");
let upload = require('../middlewares/uploadProductFile');
const productFormValidator = require('../validations/productFormValidator');

/* GET home page. */
router.get('/', adminController.admin);

/* GET show creation form */
router.get('/crear', adminController.createProducts);
/* POST send form */
router.post('/store', upload.single('image'), productFormValidator, adminController.store);

/* GET show edit form */
router.get('/editar/:id', adminController.editProducts);
/* PUT send edit form */
router.put('/editar/:id', upload.array('image'), productFormValidator, adminController.update);

router.delete('/eliminar/:id', adminController.delete)


module.exports = router;
