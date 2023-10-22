const db = require('../../database/models')

const { validationResult } = require('express-validator')

module.exports = (req,res) => {
    const errors = validationResult(req)
    const product = products.find(product => product.id === +req.params.id)

    if (errors.isEmpty()) { 
    const {name, price, discount, category, description, textColor, hexColor, rememberImg} = req.body;

    const productsUpdated = products.map((product) => {
      if (product.id == +req.params.id) {
        let imagesRemember = [];
        const newImages = req.files?.images?.map((img) => img.filename) || []; 
        if (
          rememberImg === "true" &&
          product.images.length + newImages.length <= 6
        ) {
          imagesRemember = [...product.images, ...newImages];
        }

        if (req.files?.image?.length) {  // si vienen
          const pathFileImgPrimary = path.join(
            __dirname,
            `../../public/img/${product.image}`
          );
          const existFile = fs.existsSync(pathFileImgPrimary);
          existFile && fs.unlinkSync(pathFileImgPrimary);
        }

        if (rememberImg !== "true" && newImages.length <= 6) {
          product.images.forEach((img) => {
            const pathFileImgPrimary = path.join(
              __dirname,
              `../../public/img/${img}`
            );
            const existFile = fs.existsSync(pathFileImgPrimary);
            existFile && fs.unlinkSync(pathFileImgPrimary);
          });
        }

        if (
          (rememberImg === "true" &&
            product.images.length + newImages.length > 6) ||
          (rememberImg !== "true" && newImages.length > 6)
        ) {
          newImages.forEach((img) => {
            const pathFileImgPrimary = path.join(
              __dirname,
              `../../public/img/${img}`
            );
            const existFile = fs.existsSync(pathFileImgPrimary);
            existFile && fs.unlinkSync(pathFileImgPrimary);
          });
          imagesRemember = product.images;
        }

        product.name = name?.trim();
        product.price = +price;
        product.discount = +discount;
        product.category = category;
        product.description = description?.trim();
        product.color = { text: textColor, hex: hexColor };
        product.image = req.files?.image?.length? req.files.image[0].filename : product.image;
        product.images = imagesRemember.length ? imagesRemember : newImages;
      }
      return product;
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(productsUpdated, null, 3), "utf-8");

    return res.redirect(`/products/details/${req.params.id}`);
   } else {
     return res.render('productEdit',{
       errors : errors.mapped(),
       ...product
      })
    }
}