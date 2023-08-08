var express = require('express');
const usersControllers = require('../controller/usersControllers');
var router = express.Router();

/* GET users listing. */
router.get('/cart', usersControllers.cart);
router.get('/details', usersControllers.details);
router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);

module.exports = router;
