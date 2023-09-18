const { check } = require("express-validator");

module.exports = [
    check("username")
      .isLength( {
        min: 2,
      })
      .withMessage("El nombre es obligatorio")
      .isAlpha("es-ES",{
        ignore:' '
      })
      .withMessage("Solo letras"),
    check("lastname")
      .isLength({
        min: 2,
      })
      .withMessage("El apellido es obligatorio")
      .isAlpha("es-ES",{
        ignore:' '
      })
      .withMessage("Solo letras"),
    ]