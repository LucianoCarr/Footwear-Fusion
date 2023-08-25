const express = require('express');
const indexControllers = require('../controller/indexControllers');
const router = express.Router();

/* / */
router.get('/', indexControllers.index);
router.get('/search', indexControllers.search); 

module.exports = router;
