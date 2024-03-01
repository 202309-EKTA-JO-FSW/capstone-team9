const express = require('express');
const ticketController = require('../controllers/Ticket');

const router = express.Router();


// Move the route handling logic here
router.get('/getTicketById:ticketId', ticketController.getTicketById);

// This is route is for handling Post requests to create new ticket
router.post('/createTicket', ticketController.createTicket);

// This is route is for handling Put requests to update details of a specific ticket by its ID
router.put('/updateTicketById', ticketController.updateTicketById);

// This is route is for handling Delete requests to delete a specific ticket by its ID
router.delete('/deleteTicketById:DeleteticketId', ticketController.deleteTicketById);

module.exports = router;