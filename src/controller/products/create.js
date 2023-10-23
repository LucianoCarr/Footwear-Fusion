const db = require('../../database/models')

const {create} = require('../../services/productsServices')

const { validationResult } = require('express-validator')

module.exports = async (req,res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {

    const {name, price, discount, categoryId, description, color, stock} = req.body 

     const data = {
      name,
      price,
      discount,
      description,
      color,
      stock,
      categoryId,
      image: req.files?.image?.length ? req.files.image[0].filename : "default-image.png",
      images: req.files?.images?.length ? req.files.images.map((image) => image.filename) : [],
    }

    const newProduct = await create(data)
  
      return res.redirect(`/products/details/${newProduct.id}`);
    
  } else {
    return res.render("productAdd", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
}