const express = require('express');
const usersControllers = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const notUserCheck = require('../controller/notUserCheck');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', notUserCheck, usersControllers.registerPage);
router.post('/register', registerValidator, usersControllers.register);

/* login */
router.get('/login', notUserCheck, usersControllers.login);


module.exports = router;
