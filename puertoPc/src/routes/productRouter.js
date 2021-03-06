let express = require('express');
let router = express.Router();
let productController = require("../controllers/productController")
const userCheck = require('../middlewares/userCheck')

/* GET home page. */
router.get('/detalles/:id', productController.productDetail);

/* GET - List of products */
router.get('/category/:id', productController.productCategory);

/* GET - categories page general */
router.get('/category', productController.categories);

router.get('/carrito', userCheck, productController.productCart);
router.get('/', productController.index);
/* GET - Search products */
router.get('/search', productController.productSearch)

router.get('/:id', productController.category)
module.exports = router;
