const express = require('express');
const productsController = require('../controller/productsController');
const router = express.Router();

/* /produtcs */
router.get('/cart', productsController.cart)
router.get('/details/:id', productsController.details)
router.get('/add', productsController.add)

/* EDIT PRODUCT */ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.modify); 


module.exports = router;