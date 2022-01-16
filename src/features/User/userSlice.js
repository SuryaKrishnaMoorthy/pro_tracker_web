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
    [getUser.fulfilled]: (state, action) => action.payload,
  },
});

const { reducer } = userSlice;
export default reducer;
