const express = require('express');

const productsController = require('../../controllers/v1/products-controller');

const router = express.Router();

router.post('/create', productsController.createProduct);
// router.post('/update', productsController.deleteProduct);
// router.post('/delete', productsController.getProducts);

module.exports = router;
