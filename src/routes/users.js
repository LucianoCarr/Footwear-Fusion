const express = require('express');
const {register,registerPage,loginPage,login,profile} = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const notUserCheck = require('../controller/notUserCheck');
const loginValidator = require('../validations/loginValidator');
const sessionCheckLogin = require('../middlewares/sessionCheckLogin');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', notUserCheck, registerPage);
router.post('/register', registerValidator, register);

/* login */
router.get('/login', sessionCheckLogin,notUserCheck, loginPage);
router.post('/login',loginValidator, login)

/* profile */
router.get('/profile', profile);


module.exports = router;
