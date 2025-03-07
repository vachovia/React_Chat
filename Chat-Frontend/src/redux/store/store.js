import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../slice/auth/authSlice";
import chatReducer from "./../slice/chat/chatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});

export default store;
