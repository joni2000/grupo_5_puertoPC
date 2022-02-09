//let {getProducts} = require('../data/dataBase')
//let products = getProducts;

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { Op } = require('sequelize');
const db = require('../data/models')


const Products = db.Product
const Categories = db.Category
const ProductImages = db.Image

let productController = {
    	// Root - Show all products
	index: (req, res) => {
        Products.findAll({
            include: [{association: 'image'}],

        })
        .then(products => {
            res.render('products/products', {
                title:"Productos",        
                products,
                toThousand,
                session: req.session
            })
        })
        .catch(error => console.log(error))
    },

    productCart: (req, res )=> {
        res.render('products/productCart', {
            title:"Carrito",
            session: req.session
        })
    },

    productDetail: (req, res ) => {
        
        let idProduct = +req.params.id;
        let product = getProducts.find(product => product.id === idProduct)
        

        res.render('products/productDetail', {
            title: "Detalle de Producto",
            product,
            session: req.session,
            toThousand

        })
    },
    /* productCategory:(req, res) =>{

    } */
    categories: (req, res) => {
        let categoriesId = +req.params.id;

        let productsCategories = products.filter(product => +product.categories === categoriesId)
        let category = categories.find(category => category.id === categoriesId)

        res.render('categories', {
            products: productsCategories,
            categories,
        })
    }
    /* productSearch:(req, res) =>{

    } */

};

module.exports = productController;