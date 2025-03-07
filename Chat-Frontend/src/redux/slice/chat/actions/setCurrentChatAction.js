import { createAsyncThunk } from "@reduxjs/toolkit";

const setCurrentChatAction = createAsyncThunk(
  "chat/setCurrentChat",
  (payload, { rejectWithValue, getState, dispatch }) => payload
);

export default setCurrentChatAction;
