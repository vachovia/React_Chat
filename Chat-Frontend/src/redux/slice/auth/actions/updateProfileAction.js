import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../../services/authService";

const updateProfileAction = createAsyncThunk(
  "auth/updateProfile",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      return await AuthService.updateProfile(payload);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default updateProfileAction;
