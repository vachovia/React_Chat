import { createSlice } from "@reduxjs/toolkit";
import { registerAction, loginAction, logoutAction } from "./actions";

const initialState = {
  user: null,
  token: "",
  error: null,
  loading: false,
  isLoggedIn: false,
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
      state.user = action.payload;
      state.token = action.payload.token;
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
      state.user = action.payload;
      state.token = action.payload.token;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    // Logout
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
      state.error = null;
    });
  },
});

const authReducer = authSlice.reducer;

export const { authDummyAction } = authSlice.actions;

export default authReducer;
