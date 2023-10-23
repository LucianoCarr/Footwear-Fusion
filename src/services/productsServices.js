const db = require('../database/models')

const create = async (data) => {
    try {

        const {name, price, discount, categoryId, description, color, stock} = data

         const newproduct = await db.Product.create({
            name,
            price,
            discount,
            description,
            color,
            stock,
            categoryId,
            image: req.files?.image?.length ? req.files.image[0].filename : "default-image.png",
            images: req.files?.images?.length ? req.files.images.map((image) => image.filename) : [],
          })
          
            return newproduct;
            
        
    } catch (error) {
        console.log(error);
        throw {
          status: error.status || 500,
          message: error.message || "ERROR en el servicio",
        };
    }
}

module.exports = {
    create
}