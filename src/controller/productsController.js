const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
  
  cart : (req, res) => {
    return res.render('cart',{
      products
    });
  },
  
   details : (req, res) => {
    const product = products.find(product => product.id === +req.params.id)
     return res.render('details', {
      product,
      products
     });
    },

    add : (req, res) => {
  
     return res.render('productAdd');
    },
    
    create : (req,res) => {
      const {name, price, discount, category, description, textColor, hexColor} = req.body;

      const newProduct = {
        id: products[products.length - 1].id + 1,
        name: name?.trim(),
        price: +price,
        discount: +discount,
        category,
        description:description?.trim(),
        color:{text:textColor, hex:hexColor},
        image: req.files?.image?.length ? req.files.image[0].filename : 'default-image.png',
        images: req.files?.images?.length ? req.files.images.map(image => image.filename) : []
      }

      products.push(newProduct) 

      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3), "utf-8");
  
      return res.redirect(`/products/details/${newProduct.id}`);

    },
    
    edit: (req, res) => {
      const product = products.find(product => product.id === +req.params.id)
      return res.render('productEdit',{
        ...product,
      })
    },

    modify: (req, res) => {
      const {name, price, discount, category, description, textColor, hexColor, rememberImg} = req.body;
  
      const productsUpdated = products.map((product) => {
        if (product.id == +req.params.id) {
          let imagesRemember = [];
          const newImages = req.files?.images?.map((img) => img.filename) || []; 
          if (
            rememberImg === "true" &&
            product.images.length + newImages.length <= 6
          ) {
            imagesRemember = [...product.images, ...newImages];
          }
  
          if (req.files?.image?.length) {  // si vienen
            const pathFileImgPrimary = path.join(
              __dirname,
              `../../public/img/${product.image}`
            );
            const existFile = fs.existsSync(pathFileImgPrimary);
            existFile && fs.unlinkSync(pathFileImgPrimary);
          }
  
          if (rememberImg !== "true" && newImages.length <= 6) {
            product.images.forEach((img) => {
              const pathFileImgPrimary = path.join(
                __dirname,
                `../../public/img/${img}`
              );
              const existFile = fs.existsSync(pathFileImgPrimary);
              existFile && fs.unlinkSync(pathFileImgPrimary);
            });
          }
  
          if (
            (rememberImg === "true" &&
              product.images.length + newImages.length > 6) ||
            (rememberImg !== "true" && newImages.length > 6)
          ) {
            newImages.forEach((img) => {
              const pathFileImgPrimary = path.join(
                __dirname,
                `../../public/img/${img}`
              );
              const existFile = fs.existsSync(pathFileImgPrimary);
              existFile && fs.unlinkSync(pathFileImgPrimary);
            });
            imagesRemember = product.images;
          }
  
          product.name = name?.trim();
          product.price = +price;
          product.discount = +discount;
          product.category = category;
          product.description = description?.trim();
          product.color = { text: textColor, hex: hexColor };
          product.image = req.files?.image?.length? req.files.image[0].filename : product.image;
          product.images = imagesRemember.length ? imagesRemember : newImages;
        }
        return product;
      });
      fs.writeFileSync(productsFilePath, JSON.stringify(productsUpdated, null, 3), "utf-8");
  
      return res.redirect(`/products/details/${req.params.id}`);
    },

    destroy: (req,res)=>{
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
  };

module.exports = controller;