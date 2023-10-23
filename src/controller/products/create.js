const db = require('../../database/models')

const { validationResult } = require('express-validator')

module.exports = (req,res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {

    const {name, price, discount, categoryId, description, color, stock} = req.body 

     db.Product.create({
      name,
      price,
      discount,
      description,
      color,
      stock,
      categoryId,
      image: req.files?.image?.length ? req.files.image[0].filename : "default-image.png",
      images: req.files?.images?.length ? req.files.images.map((image) => image.filename) : [],
    })
    .then((newproduct)=> {
      return res.redirect(`/products/details/${newproduct.id}`);
    })
  } else {
    return res.render("productAdd", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
}