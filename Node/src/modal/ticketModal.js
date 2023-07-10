const mongoose = require("mongoose");

const ticketModal = new mongoose.Schema({
  name: String,
  date: Date,
  from: String,
  to: String,
  seatNumber: Number,
  category: String,
  busName: String,
  busFare: Number,
});

const Ticket = mongoose.model("Ticket", ticketModal);
module.exports = Ticket;
