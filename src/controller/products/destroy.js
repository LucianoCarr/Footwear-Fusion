const db = require('../../database/models')
const fs = require('fs')
const path = require('path')
//const destroyProduct = require('../../services/productsServices/destroy.Services');

module.exports = async (req, res) => {
  /*try {
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
  }*/

  try {
    const productId = req.params.id;
    const product = await db.Product.findByPk(productId);
    const images = await db.Image.findAll({ where: { productId } });

    // Eliminar las imágenes cargadas por el usuario
    for (const img of images) {
      if (img.filename !== 'default-image.png') {
        const pathFile = path.join(__dirname, `../../../public/img/${img.filename}`);
        const existFile = fs.existsSync(pathFile);
        if (existFile) {
          fs.unlinkSync(pathFile);
        }
        await img.destroy();
      }
    }

    // Eliminar el producto
    const pathFile = path.join(__dirname, `../../../public/img/${product.image}`);
    const existFile = fs.existsSync(pathFile);
    if (existFile && product.image !== 'default-image.png') {
      fs.unlinkSync(pathFile);
    }

    await product.destroy();

    return res.redirect('/');
  } catch (error) {
    console.log(error);
    
    res.status(500).send('Error del servidor');
  }
};