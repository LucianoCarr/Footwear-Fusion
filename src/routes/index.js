const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/@@@@@@@@.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const express = require('express');
const indexControllers = require('../controller/indexControllers');
const router = express.Router();

/* / */
router.get('/', indexControllers.index);

module.exports = router;
