const db = require("../../database/models");
const { Op } = require('sequelize')
//const productById = require('../../services/productsServices/detail.Services');

module.exports = async (req, res) => {
  try {
  const productParams = req.params.id
  const product = await db.Product.findByPk(productParams, {
    include: ["images","categoria"]
    
    });
  

  let messageSubTitle = "PRODUCTOS RELACIONADOS";
  const isOtherProducts = Math.round(Math.random() * 1)
  let config = {
    where: {
      [Op.and]: [
        {
          categoryId: product.categoryId
        },
        {
          id: {
            [Op.ne]: productParams
          }
        }
      ]
    }
  }
  if (isOtherProducts) {
    messageSubTitle = "OTROS PRODUCTOS"
    config = {
      where:
      {
        id: {
          [Op.ne]: productParams
        }
      }
    }
  }

  const products = await db.Product.findAll(config);
  console.log(product);
  return res.render("details", {
    product,
    products,
    subtitleText: messageSubTitle,
    
  });
  } catch (error) {
    console.log(error);
  }
};
