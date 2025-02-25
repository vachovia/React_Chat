import { createAsyncThunk } from "@reduxjs/toolkit";
import API, { setHeadersAndStorage } from "./../../../../services/api";

const loginAction = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await API.post("/login", payload);
      setHeadersAndStorage(data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default loginAction;
