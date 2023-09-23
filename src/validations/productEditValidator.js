const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('Nombre del producto es obligatorio')
    .isLength({
        min:2,
    }).withMessage('Tiene que se al menos 2 caracteres'),
    check('textColor')
    .notEmpty().withMessage('El color tiene que se obligatorio'),
    check('price')
    .notEmpty().withMessage('Precio es obligatorio')
    .isInt({
        get: 1,
    }).withMessage('Precio tiene que se un numero')
]