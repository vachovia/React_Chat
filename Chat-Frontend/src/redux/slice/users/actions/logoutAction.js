import { createAsyncThunk } from "@reduxjs/toolkit";

const logoutUserAction = createAsyncThunk("users/logout", () => {
  return null;
});

export default logoutUserAction;
