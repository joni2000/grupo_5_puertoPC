var { check, body } = require('express-validator');
const db = require("../data/models")
let bcrypt = require('bcryptjs')

const Users = db.User;

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña')
    .isLength({
        min: 4
    })
    .withMessage('La contraseña debe tener al menos 4 caracteres'),

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