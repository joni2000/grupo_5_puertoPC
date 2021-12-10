var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController")

/* GET home page. */
router.get('/detalles', productController.productDetail);
router.get('/carrito', productController.productCart);
router.get('/productos', productController.products);

module.exports = router;
