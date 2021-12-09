var adminController = {

        createProducts: (req, res )=> {
            res.render('admin/createProducts',{
            title: "Crear Producto"
            });
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