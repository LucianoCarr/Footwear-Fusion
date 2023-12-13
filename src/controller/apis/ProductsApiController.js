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



//-----------------------
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

const getAllProducts = async (req,res) => {
    try {
        const categories = await db.Product.findAll({
            include : ['categoria','images']
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

const createProduct = async (req,res)=>{
    try {
        const {name,price,color,discount,categoryId,description} = req.body
        const newProduct = await db.Product.create({
            name : name?.trim(),
            price,
            color,
            discount: discount || 0,
            categoryId,
            description: description.trim()

        })

        return res.status(200).json({
            ok : true,
            data : newProduct,
            msg : "Producto creado con exito"
        })
    } catch (error) {
       return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || "Upss, hubo un error",
        date : null
       })
    }
}

module.exports = {
    getAllCategory,
    totalProductInDb,
    totalOfertas,
    getAllProducts,
    createProduct
}