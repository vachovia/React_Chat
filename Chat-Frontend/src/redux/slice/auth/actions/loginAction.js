import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./../../../../services/authService";

const loginAction = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {      
      return await AuthService.login(payload);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default loginAction;
