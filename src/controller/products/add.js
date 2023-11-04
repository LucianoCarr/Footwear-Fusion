const db = require('../../database/models')

module.exports = async (req,res) => {
    try {
        const categories = await db.Category.findAll()
    return res.render("productAdd",{
        categories
    });

    } catch (error) {
        console.log(error);
    }
}