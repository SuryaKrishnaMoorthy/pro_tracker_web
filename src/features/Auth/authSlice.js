import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, loginUser } from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: "",
    loading: false,
    loggedIn: false,
  },
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
      state.error = "";
      state.loggedIn = false;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.loggedIn = true;
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.loggedIn = false;
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = "";
      state.loggedIn = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.loggedIn = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.loggedIn = false;
    },
  },
});

const { reducer } = authSlice;

export default reducer;
