const express = require('express');
const router = express.Router();
const { checkMail, checkPassword } = require('../controller/apis/apiUser');
/* /Api */
router.get('/check-email', checkMail);
router.get('/check-password', checkPassword);
 

module.exports = router;