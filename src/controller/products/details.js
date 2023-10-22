const db = require('../../database/models')

module.exports = (req,res) => {

    const products = readJSON('products.json')
    /* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

    const product = products.find(product => product.id === +req.params.id)
     return res.render('details', {
      product,
      products
     });
}