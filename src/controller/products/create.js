const db = require('../../database/models')

//const {createProduct} = require('../../services/productsServices/create.Services')

const { validationResult } = require('express-validator')

module.exports = async (req,res) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
  
      const {name, price, discount,category,description, color, hexColor, sizes, stock} = req.body 

      const newProduct = await db.Product.create({
        name,
        price,
        discount : discount  || 0,
        description,
        sizes,
        color,
        hexColor,
        stock,
        categoryId : category ,
        image: req.files?.image?.length ? req.files.image[0].filename : "default-image.png",
       // images: req.files?.images?.length ? req.files.images.map((image) => image.filename) : [],
      },)
      
      const newImages = await req.files?.images?.map((img) => {
        return { filename: img.filename, productId: newProduct.id };
      }) || [];
      
      await db.Image.bulkCreate(newImages)
      
          return res.redirect(`/products/details/${newProduct.id}`);

    } else {

      const categories = await db.Category.findAll()
        
        return res.render("productAdd", {
          errors: errors.mapped(),
          old: req.body,
          categories
        });
      }
  } catch (error) {
    console.log("Error al crear el producto:",error);
  }
}	