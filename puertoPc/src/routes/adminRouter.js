var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController")
let upload = require('../middlewares/uploadProductFile')

/* GET home page. */
router.get('/', adminController.admin);

/* GET show creation form */
router.get('/crear', adminController.createProducts);
/* POST send form */
router.post('/store', upload.array('image', 5), adminController.store);

router.get('/editar', adminController.editProducts);

/* DELETE product */
/* router.delete("/:id", adminController.destroy) */

module.exports = router;
