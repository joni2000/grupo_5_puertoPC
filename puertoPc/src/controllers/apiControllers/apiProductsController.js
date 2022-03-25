const db = require('../../data/models');
const { Op } = require('sequelize');

const Products = db.Product
const Categories = db.Category

module.exports = {
    products: (req, res) => {
        Products
        .findAll({
            include: [ { association: 'image'},
                       { association: 'category'}       
                     ],
          })
        .then(e => {
            return res.json({
              products: e
            })
        })
    },

    categories: (req, res)=>{
      Categories
        .findAll({
            include: [
                { association: 'products'}]
               })
        .then(e => {
            return res.json(e)
        })
    },
    
    showCategories: (req, res) => {
        let productId = Number(req.params.id);
        const categoriesPromise =  Categories.findByPk(productId)
        const productPromise = Products.findAll({
            include: [{ association: 'image'}],
                   where: {
                    category_id: Number(req.params.id)
                }  
        });
        Promise.all([productPromise, categoriesPromise])
        .then(e => {
            return res.json(e)
        })
    },
    searchCategory:(req, res)=>{
        Categories
        .findAll({
            where:{
                name: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then(e => {
            if (e.length > 0){
               return res.json(e) 
            }
            return res.json('No se encontro la categoria')
        })

    }
}