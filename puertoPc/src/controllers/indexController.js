let {getProducts} = require('../data/dataBase')
let products = getProducts;

let toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
  index: (req, res )=> {  
    let productsInSale = products.filter(product => product.discount > 0)  
    let productsAdvantages = products.filter(product => product)  
    
    res.render('index',{
      title: "Puerto PC",
      productsInSale,
      productsAdvantages,
      toThousand,
      session: req.session
    })
  },
  
};

module.exports = controller 