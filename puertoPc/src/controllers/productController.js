var fs = require('fs');
var path = require('path');

var productsFilePath = path.join(__dirname, '../data/products.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


var productController = {
    	// Root - Show all products
	products: (req, res) => {

        let idProduct = +req.params.id;
        let product = products.find(product => product.id === idProduct);

        
		res.render('products/products', {
            title:"Productos",        
			products,
			toThousand
		});
	},

    productCart: (req, res )=> {
        res.render('products/productCart', {
            title:"Carrito"
        }); 
    },

    productDetail: (req, res )=> {
        let products =require('../data/products.json')

        let controller ={
            product : (req, res) => {

                let   productDetailId = +req.params.id;
                
            }
        }
        res.render('products/productDetail',{
            title: "Detalle de Producto"
        });
    },

};

module.exports = productController;