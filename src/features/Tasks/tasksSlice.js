import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "./tasksThunk";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getTasks.fulfilled]: (state, { payload }) => {
      state.error = "";
      state.loading = true;
    },
    [getTasks.fulfilled]: (state, { payload }) => {
      state.tasks = payload.tasks;
      state.error = "";
      state.loading = false;
    },
    [getTasks.error]: (state, { payload }) => {
      state.error = "";
      state.loading = payload.error;
    },
  },
});

const { reducer, actions } = tasksSlice;
export default reducer;
