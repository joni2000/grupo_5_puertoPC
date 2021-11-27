var productController = {

    productCart: (req, res )=> { 
        res.render('productCart'); //change to "render"
    },

    productDetail: (req, res )=> {
        res.render('productDetail');
    },


};

module.exports = productController;