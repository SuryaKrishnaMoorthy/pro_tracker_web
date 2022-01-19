import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, login } from "./authService";
// import { getUser } from "../User/userThunk";

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      await signUp(body);
      // dispatch(getUser());
    } catch (error) {
      if (!error.response) {
        // dispatch an error, so update state
        console.log(error);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      await login(body);
      // return dispatch(getUser());
    } catch (error) {
      if (!error.response) {
        // dispatch an error, so update state
        console.log(error);
      }
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
