const res = require('express/lib/response');
const { Op } = require('sequelize');
const db = require('../data/models')
const fetch = require("node-fetch");

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
    
    productCategory:(req, res) =>{
      Categories.findOne( {
            include:[{ association: 'product',}],
               where: {
                id: req.params.id
           }
        })
        .then((category)  => {
             Categories.findByPk(req.params.category_id,{
                  include: [{ association: 'categories'}]
             })
         .then((productCategory) => {
             res.render('index',{
                products:category.products,
                category,
                product,
                session: req.session
             })
           })
         })
    },

    categories: async (req, res) => {
       /*  let categoriesApi = await fetch("http://localhost:3002/api/products/category/").then(response => response.json())
        

             let categories = categoriesApi.categories
             Categories.findByPk(req.params.id)
                .then(category => {
                        res.render('products/categories', {
                        title: "Categorias",
                        categories,
                        category,
                        session: req.session,
                        old: req.body
                    });
                }).catch(error => console.log(error)) res.send(categoriesApi)
          console.log(categoriesApi)*/
        /* let categoriesId = +req.params.id;

        let productsCategories = products.filter(product => +product.categories === categoriesId)
        let category = categories.find(category => category.id === categoriesId)

        res.render('categories', {
            products: productsCategories,
            categories,
        }) */
    },
    productSearch:(req, res) =>{
        Products.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.keywords
                }
            },
            include: [{association: 'image'}]
        })
        .then((result) => {
            res.render('products/search', {
                title:"Resultados de búsqueda",
                result,
                search: req.query.keywords,
                session: req.session
            })
        })
    },

};

module.exports = productController;