import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("access_token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.value = action.payload;
    },
    logout(state) {
      state.value = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
