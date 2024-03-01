const express = require('express');
const ticketController = require('../controllers/Ticket');

const router = express.Router();

// Move the route handling logic here
router.get('/getTicketById:ticketId', ticketController.getTicketById);
// Add other ticket routes...

module.exports = router;