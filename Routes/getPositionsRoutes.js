const express = require('express');
const router = express.Router();
const {getPositions} = require('../controllers/getPositions');

// Route definitions
router.get('/', getPositions);      // GET /api/users/


module.exports = router;