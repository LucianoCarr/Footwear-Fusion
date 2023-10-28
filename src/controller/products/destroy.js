const db = require('../../database/models')
const fs = require('fs')
const path = require('path')
//const destroyProduct = require('../../services/productsServices/destroy.Services');

module.exports = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await db.Product.findByPk(productId)
    const images = await db.Image.findAll({where:{productId}})

    const pathFile = path.join(__dirname,`../../../public/img/${product.image}`)
    const existFile = fs.existsSync(pathFile)
    if(existFile) {
      fs.unlinkSync(pathFile)
    } 

    images.forEach(async(img) => {
      const pathFile = path.join(__dirname,`../../../public/img/${img.filename}`)
      const existFile = fs.existsSync(pathFile)
      if(existFile) {
        fs.unlinkSync(pathFile)
      }
      await img.destroy()
    });

   
    await product.destroy()
   


    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};