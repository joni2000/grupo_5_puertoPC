const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/apiControllers/apiProductsController");

router.get('/category', apiProductController.apiCategories);
/* Search category */
router.get('/category/search', apiProductController.searchCategory);

router.get('/category/:id', apiProductController.showCategories);

module.exports = router;