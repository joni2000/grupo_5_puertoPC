let {getCategories, getProducts, writeJson} = require('../data/dataBase');
const { get } = require('../routes/adminRouter');
let orderedCategories = getCategories.map(category => category.name)


var adminController = {

        createProducts: (req, res )=> {
            res.render('admin/createProducts',{
                title: "Crear Producto",
                listCategories: orderedCategories.sort(),
                category: getCategories,
            })
        },
        store: (req, res) => {
            let {name, description, category, /* colors, */ stock, image, price, discount} = req.body
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
                product,
            });
        },
        
        update: (req, res)=> {
            let productId = +req.params.id;

            let {name, description, category,/*  colors , */ stock, image, price, discount} = req.body

            getProducts.forEach(product => {
                if(product.id === productId){
                    product.id = product.id,
                    product.name = name.trim(),
                    product.price = +price.trim(),
                    product.category = category,
                    product.description = description.trim(),
                    product.discount = +discount,
                    product.stock = +stock,
                    /* product.colors = colors, */
                    product.image = req.file ? [req.file.filename] : product.image
                }
            })
                writeJson(getProducts, "products")
            
                res.redirect('/')
        },
        
        
        admin: (req, res )=> {
            res.render('admin/admin', {
                name: "jonathan",
                title: "Crear Producto",
                products: getProducts
            });
        },

        delete: (req, res) => {
            let productId = +req.params.id;
    
            getProducts.forEach(product => {
                if(product.id === productId){
                    if(fs.existsSync("./public/images/products/", product.image[0])){
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
    
            writeJson(getProducts, 'products')
            res.redirect('/admin')
        }
  };

  module.exports = adminController;