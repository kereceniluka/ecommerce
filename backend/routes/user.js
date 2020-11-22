const express = require('express');
const router = express.Router();

// middlewares
const { protect } = require('../middleware/auth');

// controllers
const { authUser, registerUser, getUserProfile } = require('../controllers/user');

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;