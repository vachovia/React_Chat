import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./../../../../services/authService";

const registerUserAction = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      return await AuthService.register(payload);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default registerUserAction;
