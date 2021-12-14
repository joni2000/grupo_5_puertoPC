var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController")
let upload = require('../middlewares/uploadProductFile')

/* GET home page. */
router.get('/', adminController.admin);

/* GET show creation form */
router.get('/crear', adminController.createProducts);
/* POST send form */
router.post('/store', upload.single('image'), adminController.store);

router.get('/editar/:id', adminController.editProducts);
router.put('/editar/:id', upload.single('image'),adminController.update);


module.exports = router;
