const express = require('express');
const usersControllers = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator')
const router = express.Router();

/* /users */

/* registro */
router.get('/register', usersControllers.registerPage);
router.post('/register', registerValidator, usersControllers.register);

/* login */
router.get('/login', usersControllers.login);


module.exports = router;
