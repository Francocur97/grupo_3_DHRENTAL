
const express = require('express');
const router = express.Router();
const productsControllers =  require('../controllers/productsControllers');

router.get('/productCart',productsControllers.productCart);
router.get('/productEdit',productsControllers.productEdit);
router.get('/productCreate',productsControllers.productCreate);
router.get('/productDetail',productsControllers.productDetail);

module.exports = router ;