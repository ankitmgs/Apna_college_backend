const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProgress, toggleProgress } = require('../controllers/progressController');

router.get('/', authMiddleware, getProgress);
router.post('/toggle', authMiddleware, toggleProgress);

module.exports = router;
