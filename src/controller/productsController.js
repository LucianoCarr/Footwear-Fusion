const db = require("../database/models");

const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsData.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const { validationResult } = require("express-validator");

const controller = {
  cart: (req, res) => {
    return res.render("cart", {
      products,
    });
  },

  details: (req, res) => {
    db.Product.findByPk(req.params.id,{
      include : ['images']
    })
    .then(product => {
      return res.render("details", {
        product
      });
    })
  },

  add: (req, res) => {
    return res.render("productAdd");
  },

  create: (req, res) => {
    const {name,price,discount,categoryId,description,image,color,stock } = req.body 

    db.Product.create({
     name,
     price,
     discount,
     description,
     image : null,
     color :null,
     stock,
     categoryId,
   })
   .then((newproduct)=> {
     return res.redirect(`/products/details/${newproduct.id}`);
   })
   .catch(error => console.log(error))
  },

  edit: async (req, res) => {
    try {
      const config = {
        attributes:{
          exclude:['createdAt','updatedAt']
        },
        include: [
          {
            association: "images",
            attributes:['filename']
          },
          {
            association: "categoria",
            attributes:['name']
          },
        ],
      }
      const product = await db.Product.findByPk(req.params.id, config);
      const categories = await db.Category.findAll({attributes:['name','id']})
      product.color = JSON.parse(product.color)

      return res.render("productEdit", {
        p:product,
        categories
      });
    } catch (error) {
      console.log(error);
    }
  },

  modify: async (req, res) => {
    const errors = validationResult(req);

    const product = await db.Product.findByPk(req.params.id, {
      include: ["images", "categoria"],
    });
  

    try {
      if (errors.isEmpty()) {
        const { name, price, discount, category, description, stock, textColor, hexColor, rememberImg,} = req.body;

        let imagesRemember = [];
        const newImages =
          req.files?.images?.map((img) => {
            return { filename: img.filename, productId: product.id };
          }) || [];

        if (
          rememberImg === "true" && product.images.length + newImages.length <= 6) {
          const productFormatDB = product.images.map(({filename,productId})=> {
            return {filename,productId}
          })
          imagesRemember = [...productFormatDB, ...newImages];
        }

        if (req.files?.image?.length) {
          // si vienen
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
        product.categoryId = category;
        product.stock = !!stock; // -> Boolean(stock)
        product.description = description?.trim();
        product.color = JSON.stringify({ text: textColor, hex: hexColor });
        product.image = req.files?.image?.length ? req.files.image[0].filename : product.image;

        await product.save();
        await db.Image.destroy({ where: { productId: product.id } });

        await db.Image.bulkCreate(
          imagesRemember.length ? imagesRemember : newImages
        );

        return res.redirect(`/products/details/${req.params.id}`);
      } else {
        const categories = await db.Category.findAll({attributes:['name','id']})
        return res.render("productEdit", {
          errors: errors.mapped(),
          ...product,
          categories
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroy: (req, res) => {
    const productsModify = products.filter((product) => {
      if (product.id === +req.params.id) {
        if (fs.existsSync(`./public/img/${product.image}`)) {
          fs.unlinkSync(`./public/img/${product.image}`);
        }

        product.images.forEach((image) => {
          if (fs.existsSync(`./public/img/${image}`)) {
            fs.unlinkSync(`./public/img/${image}`);
          }
        });

        return false;
      }

      return true;
    });

    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(productsModify, null, 3),
      "utf-8"
    );

    return res.redirect("/");
  },
};

module.exports = controller;
