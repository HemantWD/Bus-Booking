import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: "",
  },
  reducers: {
    setUserAndToken: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setUserAndToken } = authSlice.actions;
export default authSlice.reducer;
