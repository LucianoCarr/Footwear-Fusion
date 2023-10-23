const db = require('../../database/models')

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
      const newImages =
        req.files?.images?.map((img) => {
          return { filename: img.filename, productId: product.id };
        }) || [];

      if (
        rememberImg === "true" && product.images.length + newImages.length <= 6) {
        const productFormatDB = product.images.map(({filename,productId})=> {
          return {filename,productId}
        })
        imagesRemember = [...productFormatDB, ...newImages];
      }

      if (req.files?.image?.length) {
        // si vienen
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
      product.categoryId = category;
      product.stock = !!stock; // -> Boolean(stock)
      product.description = description?.trim();
      product.color = color?.trim();
      product.image = req.files?.image?.length ? req.files.image[0].filename : product.image;

      await product.save();
      await db.Image.destroy({ where: { productId: product.id } });

      await db.Image.bulkCreate(
        imagesRemember.length ? imagesRemember : newImages
      );

      return res.redirect(`/products/details/${req.params.id}`);
    } else {
      const categories = await db.Category.findAll({attributes:['name','id']})
      return res.render("productEdit", {
        errors: errors.mapped(),
        p:product,
        categories
      });
    }
  } catch (error) {
    console.log(error);
  }
}