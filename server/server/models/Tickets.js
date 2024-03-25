const mongoose = require("mongoose");
const User = require("./User");
const Event = require("./Event");

const TicketSchema = new mongoose.Schema({
    EventID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',// Update to the name of the Event model
      required: true,
      default:0
    },
    UserID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',// Update to the name of the User model
       required: true,
       default:0
   },
   Quantity:{
    type:Number,
    min: 0,
    required:true
  },
  PurchasedDate :{
    type:Date,
    required:true
  }
});



const Ticket = mongoose.model('Ticket', TicketSchema)
module.exports = Ticket
