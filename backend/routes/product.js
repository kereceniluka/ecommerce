const express = require('express');
const router = express.Router();

// controllers
const { getProducts, getProductById } = require('../controllers/product');

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

module.exports = router;