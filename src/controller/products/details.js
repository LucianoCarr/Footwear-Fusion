const db = require("../../database/models");
const {Op} = require('sequelize')
//const productById = require('../../services/productsServices/detail.Services');

module.exports = async (req, res) => {
  const productParams = req.params.id
  const product = await db.Product.findByPk(productParams, {
    include: ["images"],
  });
  const products = await db.Product.findAll({
    where: {
      [Op.and]: [
        {
          categoryId: product.categoryId
        },
        {
          id: {
            [Op.ne] : productParams
          }
        }
      ]
    },
  });

  return res.render("details", {
    product,
    products,
  });
};
