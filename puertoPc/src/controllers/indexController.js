//var fs = require('fs');
//var path = require('path');

//var productsFilePath = path.join(__dirname, '../data/products.json');
//var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

var controller = {

  index: (req, res )=> {    
    res.render('index',{
    title: "Puerto PC"
    });
  },
  
};

module.exports = controller 