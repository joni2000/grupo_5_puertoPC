let { check} = require('express-validator');

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar tu email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña')
]