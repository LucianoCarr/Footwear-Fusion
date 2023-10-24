const db = require('../../database/models')

//const destroyProduct = require('../../services/productsServices/destroy.Services');

module.exports = async (req, res) => {
  try {
    const productId = req.params.id;
    await db.Image.destroy({ where: { productId } });
    await db.Product.destroy({ where: { id: productId } });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};