const { Op } = require('sequelize');
const db = require('../data/models')

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
        Products.findAll({
            include: [{association: 'image'}]
        })
        .then(products => {
            res.render('products/productCart', {
                title:"Carrito",
                products,
                session: req.session
            })
        })
        
    },

    productDetail: (req, res ) => {
        Products.findOne({
            include: [{association: 'image'}],
            where: {
                id: req.params.id
            }
        })
        .then(product => {
            
            res.render('products/productDetail', {
                title: product.name,
                product,
                session: req.session,
                toThousand
            })
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