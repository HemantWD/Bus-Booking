import { createSlice } from "@reduxjs/toolkit";

const passengeSlice = createSlice({
  name: "passenger",
  initialState: {
    name: "",
    gender: "",
    age: "",
    email: "",
    mobileNo: "",
  },
  reducers: {
    updatePassengerDetails: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { updatePassengerDetails } = passengeSlice.actions;
export default passengeSlice.reducer;
