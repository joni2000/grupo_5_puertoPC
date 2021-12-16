var fs = require('fs');
var path = require('path');

var productsFilePath = path.join(__dirname, '../data/products.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

var controller = {

  index: (req, res )=> {  
    let productsInSale = products.filter(product => product.categoryindex === "in-sale")  
    let productsAdvantages = products.filter(product => product.categoryindex === "advantages")  
    
    
    res.render('index',{
    title: "Puerto PC",
    productsInSale,
    productsAdvantages,
    toThousand
    })
  },
  
};

module.exports = controller 