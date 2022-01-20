import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTasks } from "./tasksService";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await getAllTasks();
    } catch (error) {
      if (!error.response) {
        // dispatch an error, so update state
        console.log(error);
      }
      return rejectWithValue();
    }
  }
);
