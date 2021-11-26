var productController = {

    productCart: (req, res )=> { 
        res.render('productCart'); //change to "render"
    },

    productDetail: (req, res )=> {
        res.render('productDetail');
    },

    productDetail: (req, res )=> {
        res.render('createProducts');
    },

    productDetail: (req, res )=> {
        res.render('editProducts');
    },
};

module.exports = productController;