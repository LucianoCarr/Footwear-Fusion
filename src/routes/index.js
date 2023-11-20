const express = require('express');
const indexControllers = require('../controller/indexControllers');
const router = express.Router();

/* / */
/* LIST OF PRODUCT */
router.get('/', indexControllers.index);
router.get('/man', indexControllers.categoryMan);
router.get('/woman', indexControllers.categoryWoman);
router.get('/child', indexControllers.categoryChild);
router.get('/ofertas', indexControllers.ofertas);
router.get('/search', indexControllers.search); 
router.get('/about', indexControllers.about);

module.exports = router;
