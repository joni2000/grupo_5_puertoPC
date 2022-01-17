var { check, body } = require('express-validator');
var { getUsers } = require("../data/dataBase");
const res = require('express/lib/response');



module.exports = [
    check('firstName')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('lastName')
    .notEmpty()
    .withMessage('El apellido es requerido'),

    check('email')
    .isEmail()
    .notEmpty()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom((value) => {
       let user = getUsers.find(user=>{ 
            return user.email == value 
        })

        if(user){
            return false
        }else{
            return true
        }
    }).withMessage('Email ya registrado'),

    check('address')
    .notEmpty()
    .withMessage('Debes ingresar tu domicilio'),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('password2').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')
]