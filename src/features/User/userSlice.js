import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userThunk";

const userSlice = createSlice({
  name: "users",
  initialState: {
    email: "test@gmail.com",
    password: "test@123",
    first_name: "",
    last_name: "",
    zip_code: "",
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
