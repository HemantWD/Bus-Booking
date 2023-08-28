import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import seatReducer from "./seatSlice";

const store = configureStore({
  reducer: { auth: authReducer, seat: seatReducer },
});
export default store;
