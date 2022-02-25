let express = require('express');
let router = express.Router();
let productController = require("../controllers/productController")

/* GET home page. */
router.get('/detalles/:id', productController.productDetail);

/* GET - List of products */
router.get('/category/:id', productController.productCategory)

router.get('/carrito', productController.productCart);
router.get('/', productController.index);
/* GET - Search products 
router.get('/search', productController.productSearch)*/
module.exports = router;
