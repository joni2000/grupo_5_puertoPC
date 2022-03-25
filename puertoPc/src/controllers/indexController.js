let {getProducts} = require('../data/dataBase')
const db = require('../data/models');
const { Op } = require('sequelize');

let Products = db.Product

let toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
  index: (req, res )=> {  
    Products.findAll({
      include: [{ association: 'image'}],
      where: {
        discount: {
            [Op.gte]: 5
        }
    }
    }).then( productsInSale => {
        Products.findAll({
          include: [{ association: 'image'}],
        })
        .then(products => {
          res.render('index',{
            title: "Puerto PC",
            productsInSale,
            products,
            toThousand,
            session: req.session
          })
        })
    })
    
  },
  
};

module.exports = controller 