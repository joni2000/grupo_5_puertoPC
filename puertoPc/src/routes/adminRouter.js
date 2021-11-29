var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController")

/* GET home page. */
router.get('/admin', adminController.admin);
router.get('/admin/crear', adminController.createProducts);
router.get('/admin/editar', adminController.editProducts);

module.exports = router;
