const {check} = require('express-validator')

module.exports = [
   /*  check('name')
    .notEmpty().withMessage('Nombre del producto es obligatorio')
    .isLength({
        min:2,
    }).withMessage('Tiene que se al menos 2 caracteres'),
    check('textColor')
    .notEmpty().withMessage('El color tiene que se obligatorio'), */
    check('price')
    .notEmpty().withMessage('Precio es obligatorio')
    .isInt({
        get: 1,
    }).withMessage('Precio tiene que se un numero'),
/*     .custom((value, {req}) => {
        const products = readJSON('usersData.json');
        const product = products.find(product => product.id === req.params.id);
        if(!product || !compareSync(value,product.id)){
            return false
        }
            return true
        }).withMessage('Credenciales inválidas'), */
    /*check('category')
    .notEmpty().withMessage('Categoria es obligatoria') */
]