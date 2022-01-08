let {getProducts} = require('../data/dataBase')
let products = getProducts;

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


var productController = {
    	// Root - Show all products
	index: (req, res) => {
     // let products = products.filter(product => product.categories === products.categories)

        	res.render('products/products', {
            title:"Productos",        
			products,
           // sliderTitle: "Productos relacionados",
          //  slideProducts: relatedProducts,
			toThousand,
            session: req.session
		})
	},

    productCart: (req, res )=> {
        res.render('products/productCart', {
            title:"Carrito",
            session: req.session
        })
    },

    productDetail: (req, res ) => {
        let idProducts = +req.params.id;
        let product = products.find(product => product.id === idProducts);

        res.render('products/productDetail', {
            product
        }
        )//,{
          //  product,
		//	toThousand
      //  })
    },

    categories: (req, res) => {
        let categoriesId = +req.params.id;

        let productsCategories = products.filter(product => +product.categories === categoriesId)
        let category = categories.find(category => category.id === categoriesId)

        res.render('categories', {
            products: productsCategories,
            categories,
        })
    }

};

module.exports = productController;