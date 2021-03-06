const res = require('express/lib/response');
const { Op } = require('sequelize');
const db = require('../data/models')
const fetch = require("node-fetch");

let toThousand = n =>   n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
                session: req.session,
                toThousand
            })
        })
        
    },

    productDetail: (req, res ) => {
     let productsInSale = Products.findAll({
            include: [{ association: 'image'}],
            where: {
              discount: {
                  [Op.gte]: 20
              }
          } 
        })
        
       let product =  Products.findOne({
            include: [{association: 'image'}],
            where: {
                id: req.params.id
            }
        })
      Promise.all([productsInSale, product])
       .then(([productsInSale, product]) => {   
          return  res.render('products/productDetail', {
                title: product.name,
                session: req.session,
                product,
                productsInSale,
                toThousand
            })
        })

    },
    
    productCategory:(req, res) =>{
      
    },

    categories: (req, res) => {
        let productId = Number(req.params.id); 
        const categories = Categories.findAll()
        const categoryProduct = Products.findAll({
            include: [ 'category','image'],
          })
            Promise.all([categories, categoryProduct])
            .then(([categories, categoryProduct]) => {
                return res.render('products/categories', {
                    title:"Productos",
                    session: req.session,
                    categories,
                    categoryProduct,
                    toThousand,
                })
    
            }).catch(error => console.log(error))
                   

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
        .then((products) => {
            res.render('products/products', {
                title:"Productos",        
                products,
                toThousand,
                session: req.session,
                old: req.query
            })
        })
    },
    category: (req, res) => {
        Products.findAll({
            where: {
                category_id: req.params.id
            }, include: [{association: 'image'}],
        })
        .then(products => {
            res.render('products/products', {
                title:"Productos",        
                products,
                toThousand,
                session: req.session,
                old: req.query
            })
        })
    }

};

module.exports = productController;