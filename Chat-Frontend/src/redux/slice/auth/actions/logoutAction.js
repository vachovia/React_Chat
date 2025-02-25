import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearHeadersAndStorage } from "./../../../../services/api";

const logoutAction = createAsyncThunk("auth/logout", () => {
  clearHeadersAndStorage();
  return null;
});

export default logoutAction;
