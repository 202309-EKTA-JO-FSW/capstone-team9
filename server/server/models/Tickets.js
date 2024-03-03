const mongoose = require("mongoose");
const User = require("./User");
const Event = require("./Event");

const TicketSchema = new mongoose.Schema({
    Ticket:{
        type:Number,
        required: true,
        unique: true,
    },
    EventID:{
      type: Number,
      ref: Event,
      required: true,
      default:0
    },
    UserID:{
       type: Number,
       ref: User,
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
