import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../../services/api";

const fetchChatsAction = createAsyncThunk(
  "chat/fetchChats",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await API.get("/chats");
      data.forEach((chat) => {
        chat.Users.forEach((user) => {
          user.status = "offline";
        });
        chat.Messages.reverse();
      });
      return data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default fetchChatsAction;
