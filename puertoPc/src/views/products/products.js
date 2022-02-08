var express = require('express')
var router = express.Router()
var controller = require('../controller/productsController')

router.get('/detail/:id', controller.detail)

router.get('/category/:id', controller.category)

router.get('/search', controller.search)

module.exports = router;