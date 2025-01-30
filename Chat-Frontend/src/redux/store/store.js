import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/users/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export default store;
