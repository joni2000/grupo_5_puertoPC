var adminController = {

        createProducts: (req, res )=> {
            res.render('createProducts');
        },
    
        editProducts: (req, res )=> {
            res.render('editProducts');
        },
        
        admin: (req, res )=> {
            res.render('admin', {
                name: "jonathan"
            });
        },
    
  };
  
  module.exports = adminController ;