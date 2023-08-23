const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
  
  cart : (req, res) => {
    return res.render('cart');
  },
  
   details : (req, res) => {
    const product = products.find(product => product.id === +req.params.id)
     return res.render('details', {
      product
     });
    },
    add : (req, res) => {
     return res.render('productAdd');
    },
    edit: (req, res) => {
      const product = products.find(product => product.id === +req.params.id)
      return res.render('productEdit',{
        ...product,
      })
    },
    modify: (req,res) => {
    const {name,price,discount,category,description} = req.body

    const productsUpdated = products.map(product => {
      if (product.id == +req.params.id){
        product.name = name.trim();
        product.price = +price;
        product.discount = +discount;
        product.category = category;
        product.description = description.trim()
      }
      return product
    })
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null,3),'utf-8');
    
    return res.redirect('/products')
    }
}

module.exports = controller;



/* module.exports = {
    cart : (req, res) => {
       return res.render('cart');
      },
      details : (req, res) => {
        return res.render('details');
       },
       add : (req, res) => {
        return res.render('productAdd');
       },
       edit : (req, res) => {
        return res.render('productEdit');
       },
} */