let {getCategories, getProducts, writeJson} = require('../data/dataBase');
let fs = require('fs')
const { validationResult } = require('express-validator')
const db = require('../data/models')


const Products = db.Product
const Categories = db.Category
const ProductImages = db.Image
const ProductColor = db.Color

var adminController = {
        admin: (req, res )=> {
            res.render('admin/admin', {
                name: "jonathan",
                title: "Crear Producto",
                products: getProducts,
            });
        },
    
        createProducts: (req, res )=> {
                Categories.findAll()
                .then(categories => {
                    res.render('admin/createProducts',{
                        title: "Crear Producto",
                        categories: categories,
                        category: categories,
                        old: req.body
                    })
                }).catch(error => console.log(error))
        },
        store: (req, res) => {
            let errors = validationResult(req)
            let arrayImages = [];
            if(req.files){
                req.files.forEach((image) => {
                    arrayImages.push(image.filename)
                })
            }
    
            if (errors.isEmpty()) {
                const {name, description, category, stock, price, discount} = req.body

                Products.create({
                    name,
                    price,
                    description,
                    category,
                    stock,
                    discount,
                    category,
                })
                .then((product) => {
                    if(arrayImages.length > 0){
                        let images = arrayImages.map((image) => {
                            return {
                                name: image,
                                product_id: product.id
                            }
                        });
                        ProductImages.bulkCreate(images)
                        .then(() => res.redirect('/admin/products'))
                        .catch(error => console.log(error))
                    }else {
                        ProductImages.create({
                            name: 'default-image.png',
                            productId: product.id
                        })
                        .then(() => {res.redirect('/admin/products')})
                        .catch(error => console.log(error))
                    }
                })
                .catch(error => console.log(error))
            }else{
                Categories.findAll()
                .then(categories => {
                    res.render('admin/createProducts', {
                        title: "Crear Producto",
                        categories: categories.sort(),
                        category: categories,
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session
                    })
                })
            }

        },

        editProducts: (req, res )=> {
            let productId = +req.params.id;
             const productPromise = Products.findByPk(productId);
             const categoriesPromise = Categories.findAll();
            Promise.all([productPromise, categoriesPromise])
            .then(([product, categories])=>{
                res.send(product)
                res.render('admin/editProducts', {
                  title: "Editar Producto",
                  product,
                  category: categories,
                  session: req.session
              })
          })
        .catch(error => console.log(error))
        },
   
        /*    let product = getProducts.find(product => product.id === productId)
           
            res.render('admin/editProducts',{
                title: "Editar Producto",
             //   listCategories: orderedCategories.sort(),
                category: getCategories,
                product,
                session: req.session
            })

        },*/
        
        update: (req, res)=> {
        /*         let errors = validationResult(req)
            let productId = +req.params.id
            
        if(errors.isEmpty()){
    
                let {name, description, category, stock, image, price, discount} = req.body
                      
                          Products.update({
                              name,
                              price,
                              description,
                              category,
                              stock,
                              discount,
                              category,
                           },  {
                                  where: {
                                        id: req.params.id
                                 }
                               })
                               .then((result) => {
                                    ProductImages.findAll({
                                           where: {
                                           productId: req.params.id
                                            }
                                      })
                                       .then((images) => {
                                             images.forEach((image) => {
                                                   fs.existsSync('../public/images/products/', image.image)
                                                     ? fs.unlinkSync(`../public/images/products/${image.image}`)
                                                         : console.log('No se encontró el archivo')
                                                        })
                                                        ProductImages.destroy({
                                                          where: {
                                                          productId: req.params.id
                                                         }
                                                    })
                                      .then(() => {
                                            ProductImages.create({
                                                   image: req.file ? req.file.filename : 'default-image.png',
                                                          productId: req.params.id
                                                    })
                                       .then(() => {
                                                    res.redirect('/admin/products')
                                                    })
                                                 })
                                           })
                                      .catch(error => console.log(error))
                                     })     
                                        }else{
                                        let productId = +req.params.id;
                                        const productPromise = Products.findByPk(productId);
                                        const categoriesPromise = Categories.findAll();
                                        Promise.all([productPromise, categoriesPromise])
                                       .then(([product, categories])=>{
                                                res.render('admin/createProducts', {
                                                 title: "Crear Producto",
                                                  product,
                                                  categories: categories.sort(),
                                                  category: categories,
                                                  errors: errors.mapped(),
                                                  old: req.body,
                                                  session: req.session
                                                  })
                                               })
                                     .catch(error => console.log(error)) 
                                      }
                                },*/


                /*
                getProducts.forEach(product => {
                    if(product.id === productId){
                        product.id = product.id,
                        product.name = name.trim(),
                        product.price = +price.trim(),
                        product.category = category,
                        product.description = description.trim(),
                        product.discount = +discount,
                        product.stock = +stock,
                        /* product.colors = colors, *//*
                        product.image = req.file ? [req.file.filename] : product.image
                    }
                })
                    writeJson(getProducts, "products")
                
                    res.redirect('/')
            }else{
                let product = getProducts.find(product => product.id === productId)
                res.render('admin/editProducts',{
                    title: "Editar Producto",
                    listCategories: orderedCategories.sort(),
                    category: getCategories,
                    product,
                    old: req.body,
                    errors: errors.mapped()
            })*/
        },
        delete: (req, res) => {
            let productId = +req.params.id;

            getProducts.forEach(product => {
                if(product.id === productId){
                    if(fs.existsSync("./public/images/products", product.image[0])){
                        fs.unlinkSync(`./public/images/products/${product.image[0]}`)
                    }else{
                        console.log('No encontré el archivo')
                    }
    
                    let productToDestroyIndex = getProducts.indexOf(product) // si lo encuentra devuelve el indice si no -1
                    if(productToDestroyIndex !== -1) {
                        getProducts.splice(productToDestroyIndex, 1)
                    }else{  // primer parámetro es el indice del elemento a borrar, el segundo, la cantidad a eliminar 
                        console.log('No encontré el producto')
                    }
                }
            })
    
            writeJson(getProducts, "products")
            res.redirect('/admin/')
        }
  };

  module.exports = adminController