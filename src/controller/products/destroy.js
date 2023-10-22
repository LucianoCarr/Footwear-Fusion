const db = require('../../database/models')

module.exports = (req,res) => {
    const productsModify = products.filter((product) => {
        if (product.id === +req.params.id) {
          
          if (fs.existsSync(`./public/img/${product.image}`)) {
            fs.unlinkSync(`./public/img/${product.image}`);
          }
    
          product.images.forEach(image => {
            if (fs.existsSync(`./public/img/${image}`)) {
              fs.unlinkSync(`./public/img/${image}`);
            }
          });
    
          return false; 
        }
    
        return true;
      });
    
      fs.writeFileSync(productsFilePath, JSON.stringify(productsModify, null, 3), 'utf-8');
    
      return res.redirect('/');
    }