const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getSheet } = require('../controllers/sheetController');

router.get('/', authMiddleware, getSheet);

module.exports = router;
