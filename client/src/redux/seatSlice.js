import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: [],
  reducers: {
    selectedSeat: (state, action) => {
      const { seatNumber, id } = action.payload;
      const selectedSeat = { seatNumber, id };
      return [...state, selectedSeat];
    },
    deselectSeat: (state, action) => {
      const seatToRemove = action.payload;
      return state.filter((seat) => seat.seatNumber !== seatToRemove);
    },
  },
});

export const { selectedSeat, deselectSeat } = seatSlice.actions;
export default seatSlice.reducer;
