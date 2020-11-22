const express = require('express');
const router = express.Router();

// middlewares
const { protect } = require('../middleware/auth');

// controllers
const { addOrderItems } = require('../controllers/order');

router.route('/').post(protect, addOrderItems);

module.exports = router;