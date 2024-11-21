const express = require('express');
const router = express.Router();
const {getHoldings} = require('../controllers/getHoldings');

// Route definitions
router.get('/', getHoldings);      // GET /api/users/
// router.post('/', createUser);   // POST /api/users/

module.exports = router;