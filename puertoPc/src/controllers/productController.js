var fs = require('fs');
var path = require('path');

var productsFilePath = path.join(__dirname, '../data/products.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


var productController = {
    	// Root - Show all products
	products: (req, res) => {

      //  let idProduct = +req.params.id;
      //  let product = products.find(product => product.id === idProduct);
       // let products = products.filter(product => product.categories === products.categories)

        
		res.render('products/products', {
            title:"Productos",        
			products,
           // sliderTitle: "Productos relacionados",
          //  slideProducts: relatedProducts,
			toThousand
		});
	},

    productCart: (req, res )=> {
        res.render('products/productCart', {
            title:"Carrito"
        }); 
    },

    productDetail: (req, res )=> {
            let productId = +req.params.id;
            let product = products.find(product => product.id === productId)
            res.render('detail', {
                product,
                toThousand
            })
        },
    categories: (req, res) => {
        let categoriesId = +req.params.id;

        let productsCategories = products.filter(product => +product.categories === categoriesId)
        let category = categories.find(category => category.id === categoriesId)

        res.render('categories', {
            products: productsCategories,
            categories,
        })
    },

};

module.exports = productController;