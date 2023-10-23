const db = require('../../database/models')

module.exports = async (req,res) => {
  try {
    const config = {
      attributes:{
        exclude:['createdAt','updatedAt']
      },
      include: [
        {
          association: "images",
          attributes:['filename']
        },
        {
          association: "categoria",
          attributes:['name']
        },
      ],
    }
    const product = await db.Product.findByPk(req.params.id, config);
    const categories = await db.Category.findAll({
      attributes:['name','id']
    })
    
    return res.render("productEdit", {
      p:product,
      categories
    });
    
  } catch (error) {
    console.log(error);
  }
}