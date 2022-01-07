var { check, body } = require('express-validator');
var { getUsers } = require("../data/dataBase");
const res = require('express/lib/response');

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
      .custom ((value, {req}) => {
          let user = getUsers.find(user => user.email == req.body.email);

          if(user){
              if(user.password === req.body.password){
                  return true
              }else{
                  return false
              }

          }else{
              return false
          }

      }) .withMessage('Credenciales Invalidas')
]