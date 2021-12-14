let {getCategories, getProducts, writeJson, getColors} = require('../data/dataBase')
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
            res.render('admin/editProducts',{
                title: "Editar Producto"
            });
        },
        
        
        admin: (req, res )=> {
            res.render('admin/admin', {
                name: "jonathan",
                title: "Crear Producto"
            });
        },
  };

  module.exports = adminController;