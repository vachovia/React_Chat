import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  logoutAction
} from "./actions";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authDummyAction: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Register
    // builder.addCase(registerUserAction.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(registerUserAction.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.userAuth.userInfo = action.payload;
    // });
    // builder.addCase(registerUserAction.rejected, (state, action) => {
    //   state.loading = false;
    //   state.userAuth.error = action.payload;
    // });
    // Login
    builder.addCase(loginAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    });
    // Logout
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = null;
    });
  },
});

const authReducer = authSlice.reducer;

export const { authDummyAction } = authSlice.actions;

export default authReducer;
