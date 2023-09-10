const express = require('express');
const {register,registerPage,loginPage,login,profile} = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const loginValidator = require('../validations/loginValidator');
const sessionCheckLogin = require('../middlewares/sessionCheckLogin');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', sessionCheckLogin, registerPage);
router.post('/register', registerValidator, register);

/* login */
router.get('/login', sessionCheckLogin, loginPage);
router.post('/login',loginValidator, login)

/* profile */
router.get('/profile', profile);


module.exports = router;
