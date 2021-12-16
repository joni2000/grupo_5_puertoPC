var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController")

/* GET home page. */
router.get('/detalles/:id', productController.productDetail);
router.get('/carrito', productController.productCart);
router.get('/', productController.index);

module.exports = router;
