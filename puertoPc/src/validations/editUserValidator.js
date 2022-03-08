var { check, body } = require('express-validator');
const db = require('../data/models')


module.exports = [
    check('country')
    .notEmpty()
    .withMessage('Debes ingresar un país'),

    check('province')
    .notEmpty()
    .withMessage('Debes ingresar una provincia'),

    check('city')
    .notEmpty()
    .withMessage('Debes ingresar una ciudad'),

    check('address')
    .notEmpty()
    .withMessage('Debes ingresar tu dirección'),


    check('address')
    .notEmpty()
    .withMessage("Debes ingresar tu domicilio"),

]