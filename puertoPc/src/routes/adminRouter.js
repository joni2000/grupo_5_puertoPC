var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController")

/* GET home page. */
router.get('/', adminController.admin);

/* GET show creation form */
router.get('/crear', adminController.createProducts);

/* POST send form */
router.post('/crear', adminController.createProducts)

router.get('/editar', adminController.editProducts);

module.exports = router;
