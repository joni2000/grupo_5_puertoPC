var productController = {

    productCart: (req, res )=> { 
        res.send('productCart'); //change to "render"
    },

    productDetail: (req, res )=> {
        res.send('productDetail');
    },
};

module.exports = productController;