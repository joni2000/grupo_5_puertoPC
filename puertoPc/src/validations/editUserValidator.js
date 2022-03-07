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


    check('phone')
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

]