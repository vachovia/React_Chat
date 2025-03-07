import { createSlice } from "@reduxjs/toolkit";
import { fetchChatsAction, setCurrentChatAction } from "./actions";

const initialState = {
  chats: [],
  error: null,
  loading: false,
  currentChat: null
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatDummyAction: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Fetch All Chats
    builder.addCase(fetchChatsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchChatsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.chats = action.payload;
      state.error = null;
    });
    builder.addCase(fetchChatsAction.rejected, (state, action) => {
      state.loading = false;
      state.chats = [];
      state.error = action.payload;
    });
    // Set Current Chat
    builder.addCase(setCurrentChatAction.fulfilled, (state, action) => {
     state.currentChat = action.payload;
    });
  },
});

const chatReducer = chatSlice.reducer;

export const { chatDummyAction } = chatSlice.actions;

export default chatReducer;
