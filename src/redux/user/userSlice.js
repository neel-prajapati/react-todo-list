import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    isLoggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.userName = "";
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
