const Ticket = require('../models/Tickets');

// Get ticket details by ticket ID
const getTicketById = async (ticketId) => {
    try {
        const ticket = await Ticket.findById(ticketId)
            .populate('EventID')
            .populate('UserID');

        return ticket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Create a new ticket
const createTicket = async (req, res) => {
    try {
        const { EventID, NumberOfAttendees, PurchasedDate,time} =  req.body;
        const newTicket = new Ticket({
                EventID,
                NumberOfAttendees,
                PurchasedDate,
                time
        });
        
        await newTicket.save();
        res.status(201).json({ message: "Ticket created successfully", ticket: newTicket });
    } catch (err) {
      // Handle errors
      console.error("Error creating ticket:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };

// Update ticket details by ticket ID
const updateTicketById = async (ticketId, updatedData) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
            ticketId,
            updatedData,
            { new: true } // Return the updated document
        );
        return updatedTicket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Delete a ticket by ticket ID
const deleteTicketById = async (ticketId) => {
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(ticketId);
        return deletedTicket;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    getTicketById,
    createTicket,
    updateTicketById,
    deleteTicketById,
};