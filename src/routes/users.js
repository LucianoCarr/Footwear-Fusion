const express = require('express');
const {register,registerPage,loginPage,login,profile,processLogin} = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const loginValidator = require('../validations/loginValidator');
const sessionCheckLogin = require('../middlewares/sessionCheckLogin');
const sessionCheckNotLogin = require('../middlewares/sessionCheckNotLogin');
const notUsercheck = require('../middlewares/notUsercheck');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', sessionCheckLogin, registerPage);
router.post('/register', registerValidator, register);

/* login */
router.get('/login', sessionCheckLogin, login)
router.post('/login',loginValidator,processLogin)

/* profile */
router.get('/profile',sessionCheckNotLogin, profile);


module.exports = router;
