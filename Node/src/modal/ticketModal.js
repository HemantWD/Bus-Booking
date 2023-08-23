import mongoose from "mongoose";

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

export default mongoose.model("Ticket", ticketModal);
