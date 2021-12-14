let {getCategories, getProducts, writeJson, getColors} = require('../data/dataBase');
const { get } = require('../routes/adminRouter');
let orderedCategories = getCategories.map(category => category.name)
let orderedColors = getColors.map(color => color.color)


var adminController = {

        createProducts: (req, res )=> {
            res.render('admin/createProducts',{
                title: "Crear Producto",
                listCategories: orderedCategories.sort(),
                category: getCategories,
                colors: orderedColors.sort()
            })
        },
        store: (req, res) => {
            let {name, description, category, colors, stock, image, price, discount} = req.body
            let lastId = 0;
            getProducts.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        });

            let newProduct = {
                id: lastId + 1,
                name: name.trim(),
                description: description.trim(),
                category,
                colors: colors.filter(Boolean),
                price: +price,
                stock: +stock,
                discount: discount ? +discount : 0,
                image: req.file ? [req.file.filename] : ["default-image.png"]
            }
            
            getProducts.push(newProduct)
            writeJson(getProducts, "products") 

            res.redirect('/admin') 
        },

        editProducts: (req, res )=> {
            let productId = +req.params.id;
            
            let product = getProducts.find(product => product.id === productId)
            res.render('admin/editProducts',{
                title: "Editar Producto",
                listCategories: orderedCategories.sort(),
                category: getCategories,
                colors: orderedColors.sort(),
                product
            });
        },
        update: (req, res)=> {
            let productId = +req.params.id;

            let {name, description, category, colors, stock, image, price, discount} = req.body

            getProducts.forEach(product => {
                if(getProducts.id === productId){
                    product.id = product.id,
                    product.name = name.trim(),
                    product.price = +price.trim(),
                    product.category = +category,
                    product.description = description.trim(),
                    product.discount = +discount,
                    product.stock = +stock,
                    product.colors = colors,
                    product.image = req.file ? [req.file.filename] : product.image
                }
            })
        },
        
        
        admin: (req, res )=> {
            res.render('admin/admin', {
                name: "jonathan",
                title: "Crear Producto"
            });
        },
  };

  module.exports = adminController;