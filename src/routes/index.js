var express = require('express');
const indexControllers = require('../controller/indexControllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexControllers.index);

module.exports = router;
