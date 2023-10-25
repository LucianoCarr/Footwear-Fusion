const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Nombre del producto es obligatorio")
    .isLength({
      min: 2,
    })
    .withMessage("Tiene que se al menos 2 caracteres"),
    check('color')
    .notEmpty().withMessage('El color tiene que se obligatorio'),
  check("price")
    .notEmpty()
    .withMessage("Precio es obligatorio")
    .isInt({
      get: 1,
    })
    .withMessage("Precio tiene que se un numero"),
  body("images")
    .custom(async (value, { req }) => {
      const product = await db.Product.findByPk(req.params.id, {
        include: ["images"],
      });
      const { rememberImg } = req.body;
      if (
        (rememberImg &&
          product.images.length + req.files?.images?.length > 6) ||
        (!rememberImg && newImages.length > 6)
      ) {
        throw new Error("La cantidad maxima de imágenes en el producto son 6.");
      }
      return false;
    })
];