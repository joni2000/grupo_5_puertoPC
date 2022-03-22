const db = require('../../data/models');
const { Op } = require('sequelize');

const Products = db.Product
const Categories = db.Category

module.exports = {
    apiCategories: (req, res) => {
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
    showCategories: (req, res) => {
        Categories
        .findByPk(req.params.id)
        .then(e => {
            return res.json({
                category: e
              })
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