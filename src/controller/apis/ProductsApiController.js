const db = require('../../database/models')

const getAllCategory = async (req,res) => {
    try {
        const categories = await db.Category.findAll({
            include : [
                {association : "products",
                attributes : ["id","name"]}
            ]
        })

        return res.status(200).json({
            ok : true,
            data : categories
        })
    } catch (error) {
       return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || "Upss, hubo un error"
       })
    }
}

//--------------------
const totalProductInDb = async(req,res) => {
    try {
        const total = await db.Product.count()
        return res.status(200).json({
            ok : true,
            data : total
        })

    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || "Upss, hubo un error"
           })
    }
}

//-------------------
const totalOfertas = async (req,res) => {
    try {
        const total = await db.Product.count({
            where: {
                discount: {
                    [db.Sequelize.Op.gt]: 0,
                },
            },
        });

        return res.status(200).json({
            ok: true,
            data: total,
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || "Upss, hubo un error"
           })
    }
}

module.exports = {
    getAllCategory,
    totalProductInDb,
    totalOfertas
}