const express = require('express');
const productsController = require('../controller/productsController');
const router = express.Router();

/* /produtcs */
router.get('/cart', productsController.cart)
router.get('/details', productsController.details)
router.get('/productadd', productsController.add)
router.get('/productedit', productsController.edit)

module.exports = router;