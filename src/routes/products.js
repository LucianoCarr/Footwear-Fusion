const express = require('express');
//const productsController = require('../controller/productsController');
const { cart, details, add, modify, create, destroy, edit } = require('../controller/productsController');
const { upload } = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router();
/* Validators */
const productAddValidator = require('../validations/productAddValidator')
const productEditValidator = require('../validations/productEditValidator');
const sessionCheckNotLogin = require('../middlewares/sessionCheckNotLogin');

/* /produtcs */
router.get('/cart',sessionCheckNotLogin ,cart)
router.get('/details/:id', details)

/* CREATE PRODUCT */
router.get('/add', adminCheck, add)
router.post('/add', upload.fields([
  { name: "image", maxCount: 1 }, // image primary
  { name: "images"}, // images secondary
]), productAddValidator, create)

/* EDIT PRODUCT */ 
router.get('/edit/:id', adminCheck, edit); 
router.put("/edit/:id", upload.fields([
    { name: "image", maxCount: 1 }, // image primary
    { name: "images"}, // images secondary
  ]), productEditValidator, modify); 


/* DELETE */
router.delete('/delete/:id', destroy)


module.exports = router;