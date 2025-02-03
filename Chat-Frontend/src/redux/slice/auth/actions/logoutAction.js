import { createAsyncThunk } from "@reduxjs/toolkit";

const logoutAction = createAsyncThunk("auth/logout", () => {
  return null;
});

export default logoutAction;
