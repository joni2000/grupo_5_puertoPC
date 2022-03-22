const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/apiControllers/apiProductsController");
/**All products */
router.get('/', apiProductController.products);

/* categories */
router.get('/category', apiProductController.categories);

/* Search category */
router.get('/category/search', apiProductController.searchCategory);

router.get('/category/:id', apiProductController.showCategories);

module.exports = router;