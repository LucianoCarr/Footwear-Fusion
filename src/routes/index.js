const express = require('express');
const indexControllers = require('../controller/indexControllers');
const router = express.Router();

/* / */
router.get('/', indexControllers.index);

module.exports = router;
