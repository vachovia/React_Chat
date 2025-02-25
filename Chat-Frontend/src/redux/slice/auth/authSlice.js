import { createSlice } from "@reduxjs/toolkit";
import {
  registerAction,
  loginAction,
  updateProfileAction,
  logoutAction,
} from "./actions";
import { jsonTryParse } from "./../../../utils";

const user = jsonTryParse(localStorage.getItem("user"));
const token = jsonTryParse(localStorage.getItem("token")) || "";

const initialState = {
  user: user,
  token: token,
  error: null,
  loading: false,
  isLoggedIn: !!user,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authDummyAction: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    // Login
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    // Update Profile
    builder.addCase(updateProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Logout
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
      // state.error = null;
    });
  },
});

const authReducer = authSlice.reducer;

export const { authDummyAction } = authSlice.actions;

export default authReducer;
