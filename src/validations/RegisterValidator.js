const {check, body} = require('express-validator')

const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = [
  check("username")
    .isLength({
      min: 2,
    })
    .withMessage("El nombre es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  check("lastname")
    .isLength({
      min: 2,
    })
    .withMessage("El apellido es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
    .custom((value, { req }) => {
      const user = users.find((user) => user.email === value);

      if (user) {
        return false;
      }
      return true;
    })
    .withMessage("El email ya se encuentra registrado"),
  check("password").isLength({
    min: 6,
    max: 12,
  })
  .withMessage('La contraseña debe requerir al menos 6 caracteres'),
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
];
