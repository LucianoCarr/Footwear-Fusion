const db = require('../../database/models')

//const {createProduct} = require('../../services/products.Services')
//const {createProduct} = require('../../services/productsServices/create.Services')

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


/* module.exports = async (req,res) => {
  try {
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

    const newProduct = await createProduct(data)
  
      return res.redirect(`/products/details/${newProduct.id}`);
    
  } else {
    return res.render("productAdd", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
  } catch (error) {
    return res.status(error.status || 500).json({
      ok : false,
      status : error.status || 500,
      error : error.message || 'Hubo un ERROR'
  })
  }
} */