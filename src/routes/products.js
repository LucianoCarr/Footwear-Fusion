const express = require('express');
const productsController = require('../controller/productsController');
const { upload } = require('../middleware/upload');
const router = express.Router();

/* /produtcs */
router.get('/cart', productsController.cart)
router.get('/details/:id', productsController.details)
router.get('/add', productsController.add)

/* EDIT PRODUCT */ 
router.get('/edit/:id', productsController.edit); 
router.put(
  "/edit/:id",
  upload.fields([
    { name: "image", maxCount: 1 }, // image primary
    { name: "images"}, // images secondary
  ]),
  productsController.modify
); 


/* DELETE */

router.delete('/delete/:id',productsController.destroy)


module.exports = router;