const express = require('express');
const { bookSession, getSpeakers } = require('../controllers/sessionController');
const { authenticate } = require('../middleware/authMiddleware');
const { blockSlot } = require('../middleware/slotMiddleware');
const router = express.Router();

router.get('/', getSpeakers);
router.post('/book', authenticate, blockSlot, bookSession);

module.exports = router;
