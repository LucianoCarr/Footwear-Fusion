const express = require('express');
const {register,registerPage,login,profile,processLogin, update,exit} = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const loginValidator = require('../validations/loginValidator');
const sessionCheckLogin = require('../middlewares/sessionCheckLogin');
const sessionCheckNotLogin = require('../middlewares/sessionCheckNotLogin');
const profileValidator = require('../validations/profileValidator');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', sessionCheckLogin, registerPage);
router.post('/register', registerValidator, register);

/* login */
router.get('/login', sessionCheckLogin, login)
router.post('/login', loginValidator, processLogin)

/* profile */
router.get('/profile',sessionCheckNotLogin, profile);
router.put('/profile',update)

/*exit*/
router.get('/exit',exit)


module.exports = router;
