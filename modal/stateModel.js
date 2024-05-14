import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  districts: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("State", stateSchema);
