const { check } = require("express-validator");

module.exports = [
    check("name")
      .isLength( {
        min: 2,
      })
      .withMessage("El nombre es obligatorio")
      .isAlpha("es-ES",{
        ignore:' '
      })
      .withMessage("Solo letras"),
    check("lastName")
      .isLength({
        min: 2,
      })
      .withMessage("El apellido es obligatorio")
      .isAlpha("es-ES",{
        ignore:' '
      })
      .withMessage("Solo letras"),
      check('province')
      .notEmpty().withMessage('provincia es obligatoria')
/*       check('adress')
      .isLength({
        min: 6,
      })
    .matches(/^[a-zA-Z0-9\s,'-]*$/).withMessage('Direccion tiene que llevar calle y numero'), */
    ]