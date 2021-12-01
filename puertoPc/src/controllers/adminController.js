var adminController = {

        createProducts: (req, res )=> {
            res.render('products/createProducts',{
            title: "Crear Producto"
            });
        },
    
        editProducts: (req, res )=> {
            res.render('products/editProducts',{
                title:"Editar Producto"
            });
        },
        
        admin: (req, res )=> {
            res.render('users/admin', {
                name: "jonathan"
            });
        },
    
  };
  
  module.exports = adminController ;