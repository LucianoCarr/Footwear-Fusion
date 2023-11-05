const db = require('../../database/models')
const fs = require("fs");
const path = require('path')
//const modifyProduct = require('../../services/productsServices/modify.Services');

const { validationResult } = require('express-validator')

module.exports = async (req,res) => {
  const errors = validationResult(req);

  const product = await db.Product.findByPk(req.params.id, {
    include: ["images", "categoria"],
  });


  try {
      
    if (errors.isEmpty()) {
      const { name, price, discount, category, description, stock, color, rememberImg,} = req.body;
      let imagesRemember = [];
      const newImages = req.files?.images?.map((img) => {
          return { filename: img.filename, productId: product.id };
        }) || [];

        const productFormatDB = product.images.map(({ filename, productId }) => {
            return { filename, productId };
          }
        );

      if (
        rememberImg && product.images.length + newImages.length <= 6) {
        imagesRemember = [...productFormatDB, ...newImages];
      }

      else if (!rememberImg && newImages.length <= 6) { product.images.forEach(({filename}) => {
          const pathFileImgPrimary = path.join(__dirname, `../../../public/img/${filename}`
          );

          const existFile = fs.existsSync(pathFileImgPrimary);
          existFile && fs.unlinkSync(pathFileImgPrimary);
        });

        imagesRemember = newImages
      } 

      else if (
        (rememberImg && (product.images.length + newImages.length) > 6) 
        (!rememberImg && newImages.length > 6)
      ) {
        newImages.forEach(({filename}) => { const pathFileImgPrimary = path.join(__dirname, `../../../public/img/${filename}`);
          const existFile = fs.existsSync(pathFileImgPrimary);
          existFile && fs.unlinkSync(pathFileImgPrimary);
        });
        imagesRemember = productFormatDB;
      }

      if (req.files?.image?.length) {
        // si vienen
        const pathFileImgPrimary = path.join(__dirname, `../../../public/img/${product.image}`);
        const existFile = fs.existsSync(pathFileImgPrimary);
        existFile && fs.unlinkSync(pathFileImgPrimary);
      }
    
      product.name = name?.trim() || product.name;
      product.price = +price  || product.price;
      product.discount = +discount  || product.discount;
      product.categoryId = +category  || product.categoryId;
      product.stock = !!stock  || product.stock; // -> Boolean(stock)
      product.description = description?.trim()  || product.description;
      product.color = color?.trim()  || product.color;
      product.image = req.files?.image?.length ? req.files.image[0].filename : product.image;

      await product.save();
      if(imagesRemember.length <= 6) {
        await db.Image.destroy({ where: { productId: product.id } });
        await db.Image.bulkCreate(imagesRemember);
      }

      return res.redirect('/');
    } else {
      const categories = await db.Category.findAll({
        attributes: ["name", "id"],
      });
      //product.color = JSON.parse(product.color);

      return res.render("productEdit", {
        errors: errors.mapped(),
        p: product,
        categories,
      });
    }
  } catch (error) {
    console.log(error);
  }
};