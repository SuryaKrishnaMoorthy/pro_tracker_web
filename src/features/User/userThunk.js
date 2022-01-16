import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser as user } from "./userService";

export const getUser = createAsyncThunk(
  "users/getUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await user();
    } catch (error) {
      if (!error.response) {
        // dispatch an error, so update state
        console.log(error);
      }
      return rejectWithValue();
    }
  }
);
