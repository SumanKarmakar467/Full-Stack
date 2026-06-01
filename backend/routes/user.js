const express = require('express');
const router = express.Router();

// user controller functions
const { loginUser, signupUser } = require('../controllers/userController');


// Login Route
router.post('/login', loginUser)

// Sign-Up Route
router.post('/signup', signupUser)

module.exports = router;