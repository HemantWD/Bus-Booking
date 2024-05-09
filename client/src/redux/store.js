import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import seatReducer from "./seatSlice";
import passengerReducer from "./passengerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    seat: seatReducer,
    passenger: passengerReducer,
  },
});
export default store;
