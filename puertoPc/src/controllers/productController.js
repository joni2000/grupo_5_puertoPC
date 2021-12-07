var productController = {

    productCart: (req, res )=> {
        res.render('products/productCart', {
            title:"Carrito"
        }); 
    },

    productDetail: (req, res )=> {
        res.render('products/productDetail',{
            title: "Detalle de Producto"
        });
    },

};

module.exports = productController;