const db = require('../database/models')

const productList = async (limit, offset) => {
    try {
        const {total, product} = await db.Product.findAndCountAll({
            attributes : {
                exclude : ['createdAt', 'updatedAt', "deletedAt"]
            },
            limit,
            offset
        })
        
        return product

    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR de Servicio'
        }
    }
}


module.exports = {
    productList,
}