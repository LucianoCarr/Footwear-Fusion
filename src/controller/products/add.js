const db = require('../../database/models')

module.exports = async (req,res) => {
    const categories = await db.Category.findAll()
    return res.render("productAdd",{categories});
}