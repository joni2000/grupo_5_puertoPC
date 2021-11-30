var productController = {

    productCart: (req, res )=> { 
        res.render('products/productCart'); //change to "render"
    },

    productDetail: (req, res )=> {
        res.render('products/productDetail');
    },


};

module.exports = productController;