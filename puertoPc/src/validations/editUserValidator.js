var { check, body } = require('express-validator');
const db = require('../data/models')


module.exports = [
    check('country')
    .notEmpty()
    .withMessage("Este campo es obligatorio"),

    check('province')
    .notEmpty()
    .withMessage("Este campo es obligatorio"),

    check('city')
    .notEmpty()
    .withMessage("Este campo es obligatorio"),

    check('address')
    .notEmpty()
    .withMessage("Este campo es obligatorio"),


    check('address')
    .notEmpty()
    .withMessage("Este campo es obligatorio"),

]