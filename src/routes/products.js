const express = require('express');
const productsController = require('../controller/productsController');
//const {} = require('../controller/productsController');
const { upload } = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();
/* Validators */
const productAddValidator = require('../validations/productAddValidator')
const productEditValidator = require('../validations/productEditValidator')

/* /produtcs */
router.get('/cart', productsController.cart)
router.get('/details/:id', productsController.details)

/* CREATE PRODUCT */
router.get('/add', adminCheck, productsController.add)
router.post('/add', upload.fields([
  { name: "image", maxCount: 1 }, // image primary
  { name: "images"}, // images secondary
]), productAddValidator,productsController.create)

/* EDIT PRODUCT */ 
router.get('/edit/:id', adminCheck, productsController.edit); 
router.put("/edit/:id", upload.fields([
    { name: "image", maxCount: 1 }, // image primary
    { name: "images"}, // images secondary
  ]), productEditValidator, productsController.modify); 


/* DELETE */
router.delete('/delete/:id', productsController.destroy)


module.exports = router;