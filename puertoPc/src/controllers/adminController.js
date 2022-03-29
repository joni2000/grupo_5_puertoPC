let fs = require('fs');
const { validationResult } = require('express-validator');
const db = require('../data/models');
const { Op } = require('sequelize');

const Products = db.Product;
const Categories = db.Category;
const ProductImages = db.Image;
const Users = db.User

let toThousand = n =>   n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var adminController = {
    admin: (req, res) => {
        Products.findAll({
            include: [{ association: 'category' }]
        })
            .then(products => {
                res.render('admin/admin', {
                    title: "Admin",
                    products,
                    admin: 'Jonathan Ibarrola',
                    msg: `Hay ${products.length} productos`,
                    toThousand
                });
            }).catch(error => console.log(error))


    },

    createProducts: (req, res) => {
        Categories.findAll()
            .then(categories => {
                res.render('admin/createProducts', {
                    title: "Crear Producto",
                    categories: categories,
                    old: req.body,
                    admin: 'Jonathan Ibarrola',
                })
            }).catch(error => console.log(error))
    },
    store: (req, res) => {
        let errors = validationResult(req)
        let arrayImages = [];
        if (req.files) {
            req.files.forEach((image) => {
                arrayImages.push(image.filename)
            })
        }

        if (errors.isEmpty()) {
            const { name, description, category, stock, price, discount } = req.body

            Products.create({
                name,
                price,
                description,
                stock,
                discount,
                category_id: category,
                mainImage: req.file ? req.file.filename : 'default-image.png'
            })
                .then((product) => {
                    if (arrayImages.length > 0) {
                        let images = arrayImages.map((image) => {
                            return {
                                name: image,
                                product_id: product.id
                            }
                        });
                        ProductImages.bulkCreate(images)
                            .then(() => res.redirect('/admin'))
                            .catch(error => console.log(error))
                    } else {
                        ProductImages.create({
                            name: 'default-image.png',
                            product_id: product.id
                        })
                            .then(() => { res.redirect('/admin') })
                            .catch(error => console.log(error))
                    }
                })
                .catch(error => console.log(error))
        } else {
            Categories.findAll()
                .then(categories => {
                    res.render('admin/createProducts', {
                        title: "Crear Producto",
                        categories,
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session,
                        admin: 'Jonathan Ibarrola',
                    })
                })
        }

    },

    editProducts: (req, res) => {
        let productId = Number(req.params.id);
        const productPromise = Products.findOne({
            include: [{ association: 'image' }],
            where: {
                id: productId
            }
        });
        const categoriesPromise = Categories.findAll();
        Promise.all([productPromise, categoriesPromise])
            .then(([product, categories]) => {
                res.render('admin/editProducts', {
                    title: "Editar Producto",
                    product,
                    categories: categories,
                    session: req.session,
                    admin: 'Jonathan Ibarrola',
                })
            })
            .catch(error => console.log(error))
    },

    update: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let { name, description, category, stock, price, discount } = req.body

            Products.update({
                name,
                price,
                description,
                stock,
                discount,
                category_id: category,
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then((result) => {
                    if (req.files.length > 0) {

                        ProductImages.findAll({
                            where: {
                                product_id: req.params.id
                            }
                        })
                            .then((images) => {
                                images.forEach((image) => {
                                    fs.existsSync(`./public/images/products/${image.name}`)
                                        ? fs.unlinkSync(`./public/images/products/${image.name}`)
                                        : console.log(`No se encontró el archivo`)
                                })
                                ProductImages.destroy({
                                    where: {
                                        product_id: req.params.id
                                    }
                                })
                                    .then(() => {
                                        let arrayImages = [];
                                        if (req.files) {
                                            req.files.forEach((image) => {
                                                arrayImages.push(image.filename)
                                            })
                                        }
                                        if (arrayImages.length > 0) {
                                            let images = arrayImages.map((image) => {
                                                return {
                                                    name: image,
                                                    product_id: req.params.id
                                                }
                                            });
                                            ProductImages.bulkCreate(images)
                                                .then(() => res.redirect('/admin'))
                                                .catch(error => console.log(error))
                                        } 
                                    })
                            })
                            .catch(error => console.log(error))
                    }else {
                        res.redirect('/admin')
                    }

                })
        } else {
            let productId = Number(req.params.id);
            const productPromise = Products.findByPk(productId);
            const categoriesPromise = Categories.findAll();
            Promise.all([productPromise, categoriesPromise])
                .then(([product, categories]) => {
                    res.render('admin/editProducts', {
                        title: "Editar Producto",
                        product,
                        categories,
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session
                    })
                })
                .catch(error => console.log(error))
        }
    },
    delete: (req, res) => {
        ProductImages.findAll({
            where: {
                product_id: req.params.id
            }
        })
            .then((images) => {
                images.forEach((image) => {
                    fs.existsSync(`./public/images/products/${image.name}`)
                        ? fs.unlinkSync(`./public/images/products/${image.name}`)
                        : console.log('No se encontró el archivo')
                })
                ProductImages.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                    .then(result => {
                        Products.destroy({
                            where: {
                                id: req.params.id
                            }
                        })
                            .then(res.redirect('/admin'))
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    },

    search: (req, res) => {
        /* res.send(req.query.keywords) */
        Products.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.keywords
                }
            },
            include: [{ association: 'category' }]
        })
        .then(products => {
            res.render('admin/admin', {
                title: "Admin",
                products,
                old: req.query,
                msg: `${products.length} coincidencias`,
                toThousand,
                admin: 'Jonathan Ibarrola',
            });
        }).catch(error => console.log(error))
    },

    users: (req, res) => {
        Users.findAll()
            .then(users => {
                res.render('admin/adminUsers', {
                    title: 'Usuarios',
                    users,
                    msg: `Hay ${users.length} usuarios`,
                    admin: 'Jonathan Ibarrola',
                })
            }).catch(error => console.log(error))
    },

    searchUsers: (req, res) => {
        Users.findAll({
            where: {
                first_name: {
                    [Op.substring]: req.query.keywords
                }
            }
        })
        .then(users => {
            res.render('admin/adminUsers', {
                title: 'Usuarios',
                users,
                old: req.query,
                msg: `${users.length} coincidencias`,
                admin: 'Jonathan Ibarrola',
            })
        }).catch(error => console.log(error))
    }
};


module.exports = adminController