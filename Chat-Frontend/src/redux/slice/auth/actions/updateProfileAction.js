import { createAsyncThunk } from "@reduxjs/toolkit";
import API, { setUserStorage } from "../../../../services/api";

const updateProfileAction = createAsyncThunk(
  "auth/updateProfile",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const headers = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const { data } = await API.post("/users/update", payload, headers);
      setUserStorage(data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default updateProfileAction;
