var { check, body } = require('express-validator');
const db = require('../data/models')


module.exports = [
    check('first_name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('last_name')
    .notEmpty()
    .withMessage('El apellido es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
       .custom((value) => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject('Email ya registrado')
            }
        })
    }),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    

    body('password2').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('phone')
    .notEmpty()
    .withMessage("Debes ingresar un teléfono")
    .isMobilePhone()
    .withMessage("Debes ingresar un número de teléfono válido")

    .custom((value) => {
        return db.User.findOne({
            where: {
                phone: value,
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject('Teléfono ya registrado')
            }
        })
    }),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')
]