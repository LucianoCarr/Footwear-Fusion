const db = require('../../database/models')

module.exports = (req,res) => {
    const product = products.find(product => product.id === +req.params.id)
    return res.render('productEdit',{
      ...product,
    })
}