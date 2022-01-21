import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Auth/authSlice";
import userSlice from "../features/User/userSlice";
import tasksSlice from "../features/Tasks/tasksSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    tasks: tasksSlice,
  },
});

export default store;
