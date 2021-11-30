var adminController = {

        createProducts: (req, res )=> {
            res.render('products/createProducts');
        },
    
        editProducts: (req, res )=> {
            res.render('products/editProducts');
        },
        
        admin: (req, res )=> {
            res.render('users/admin', {
                name: "jonathan"
            });
        },
    
  };
  
  module.exports = adminController ;