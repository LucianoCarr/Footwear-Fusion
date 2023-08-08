const express = require('express');
const usersControllers = require('../controller/usersControllers');
const router = express.Router();

/* /users */
router.get('/login', usersControllers.login);
router.get('/register', usersControllers.register);

module.exports = router;
