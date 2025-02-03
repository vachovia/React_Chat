import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const registerUserAction = createAsyncThunk(
  "users/register",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/users/register`;
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { fullname, email, password } = payload;
      const body = {
        fullname,
        email,
        password,
      };
      const res = await axios.post(url, body, config);
      return res.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default registerUserAction;
