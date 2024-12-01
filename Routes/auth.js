const express = require('express');
const router = express.Router();
const {autherntication} = require('../middleware/auth')

// Controller import
const {addUser, getUser, getUserDetails} = require('../controllers/auth');

// Route definitions
router.post('/signup', addUser);
router.post('/signin', getUser);
router.get('/getUserDetails',autherntication, getUserDetails)


module.exports = router;