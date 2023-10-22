const db = require('../../database/models')

const { validationResult } = require('express-validator')

module.exports = (req,res) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) { 
    const {name, price, discount, category, description, textColor, hexColor} = req.body;

    const newProduct = {
      id: products[products.length - 1].id + 1,
      name: name?.trim(),
      price: +price,
      discount: +discount,
      category,
      description:description?.trim(),
      color:{text:textColor, hex:hexColor},
      image: req.files?.image?.length ? req.files.image[0].filename : 'default-image.png',
      images: req.files?.images?.length ? req.files.images.map(image => image.filename) : []
    }

    products.push(newProduct) 

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3), "utf-8");

    return res.redirect(`/products/details/${newProduct.id}`);
  }else {
    return res.render('productAdd',{
          errors : errors.mapped(),
          old : req.body
    })

} 
}