const db = require('../../database/models')

//const {createProduct} = require('../../services/productsServices/create.Services')

const { validationResult } = require('express-validator')

module.exports = async (req,res) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
  
      const {name, price, discount, categoryId, description, color, stock} = req.body 
  
       const newProduct = await db.Product.create({
        name,
        price,
        discount : discount  || 0,
        description,
        color,
        stock,
        categoryId,
        image: req.files?.image?.length ? req.files.image[0].filename : "default-image.png",
       // images: req.files?.images?.length ? req.files.images.map((image) => image.filename) : [],
      })
  
        const newImages = await req.files?.images?.map((img) => {
          return { filename: img.filename, productId: newProduct.id };
        }) || [];
  
        await db.Image.bulkCreate(newImages)

          return res.redirect(`/products/details/${newProduct.id}`);

    } else {
        return res.render("productAdd", {
          errors: errors.mapped(),
          old: req.body,
        });
      }
  } catch (error) {
    console.log(error);
  }
}	