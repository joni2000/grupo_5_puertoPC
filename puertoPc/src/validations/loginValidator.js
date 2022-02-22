var { check, body } = require('express-validator');
const db = require("../data/models")
let bcrypt = require('bcryptjs')

const Users = db.User;

module.exports = [
    body('custom')
        .custom((value, {req}) => {
           return Users.findOne({
               where: {
                   email: req.body.email
               }
           })
           .then(user => {
               if(!bcrypt.compareSync(req.body.password, user.dataValues.password)){
                   return Promise.reject()
               }
           })
           .catch(() => {
               return Promise.reject("Credenciales inválidas")
           })
        })
]