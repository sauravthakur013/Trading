const express = require('express');
const router = express.Router();

// Controller import
const {addUser} = require('../controllers/auth');

// Route definitions
router.post('/', addUser);


module.exports = router;