const express = require('express');
const {register,registerPage,login,profile} = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const notUserCheck = require('../controller/notUserCheck');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', notUserCheck, registerPage);
router.post('/register', registerValidator, register);

/* login */
router.get('/login', notUserCheck, login);

/* profile */
router.get('/profile', profile);


module.exports = router;
