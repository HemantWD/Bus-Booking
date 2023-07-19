const mongoose = require("mongoose");

const busDetails = new mongoose.Schema({
  name: String,
  category: String,
  totalSeats: Number,
  totalWindowSeatsAvailable: Number,
  rating: Number,
  animities: [String],
});

const Bus = mongoose.model("Bus", busDetails);
module.exports = Bus;
