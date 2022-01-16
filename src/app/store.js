import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/authSlice";
import userSlice from "../features/User/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});

export default store;
