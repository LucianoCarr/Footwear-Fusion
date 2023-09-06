const express = require('express');
const {register,registerPage,login} = require('../controller/usersControllers');
const registerValidator = require('../validations/RegisterValidator');
const notUserCheck = require('../middlewares/notUserCheck');
const router = express.Router();

/* /users */

/* registro */
router.get('/register', notUserCheck, registerPage);
router.post('/register', registerValidator, register);

/* login */
router.get('/login', notUserCheck, login);


module.exports = router;
