import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./../../../../services/authService";

const logoutAction = createAsyncThunk("auth/logout", () => {
  AuthService.logout();
  return null;
});

export default logoutAction;
