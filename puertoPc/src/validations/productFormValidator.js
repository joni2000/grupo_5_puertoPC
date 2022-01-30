const { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio').bail()
    .isLength({ min: 4, max: 100 })
    .withMessage('El nombre tiene que tener entre 4 y 50 caracteres'),

    check('category')
    .notEmpty()
    .withMessage('Debes elegir una categoría'),

    check('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio').bail(),
 /*    .isNumeric()
    .withMessage('Sólo números') */

    check('discount')
    .isNumeric()
    .withMessage('Sólo números'),
    
    check('stock')
    .notEmpty()
    .isNumeric()
    .withMessage('Sólo números'),
    
    check('description')
    .notEmpty()
    .isLength({ max: 5000 })
    .withMessage('El nombre tiene que tener hasta 5000 caracteres')
]