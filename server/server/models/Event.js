const mongoose = require("mongoose");
const User = require("./User");

const EventSchema = new mongoose.Schema({
    Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  StartDateTime: {
    type: Date,
    required: true,
  },
  EndDateTime: {
    type: Date,// Change to Date type
    required: true,
  },
 Creator: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'// Update to the name of the User model
  },
  Category:{
    type:String,
    required:true
  },
  Location:{
    type:String,
    required:true
  },
  Image:{
    type:String,
    required:true
  },
  Featured:{
    type: Boolean,
    default: false  
  },
  Popular:{ // updated to Popular
    type: Boolean,
    default: false  
  },
  Price:{
    type:Number,
    min: 0,
    required:true
  },
  NumberOfAttendees:{
    type:Number,
    min: 0,
    required:true
  }
});

const Event = mongoose.model('Event', EventSchema)
module.exports = Event
