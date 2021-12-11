let {getCategories, getProducts, writeJson} = require('../data/dataBase')
let orderedCategories = getCategories.map(category => category.name)

var adminController = {

        createProducts: (req, res )=> {
            res.render('admin/createProducts',{
            title: "Crear Producto",
            category: orderedCategories.sort()
            });

            let {name, description, category, colors, stock/* , image */, price, discount} = req.body
            
            let maxId = 1;
            let id = 0;
            getProducts.forEach(product => {
                if (product.id > max) {
                    maxId = product.id
                    id = maxId + 1 
                }
            });

            let newProduct = {
                id,
                name,
                description,
                category,
                colors,
                price,
                stock,
                discount,
                /* image  */
            }
            
            products.push(newProduct)
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

  module.exports = adminController ;