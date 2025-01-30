import { createSlice } from "@reduxjs/toolkit";
import {
  logoutUserAction
} from "./actions";

const initialState = {
  user: {
    name: "Vlad"
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authDummyAction: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Get All Careers
    // builder.addCase(getCareersAction.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(getCareersAction.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.careers = action.payload;
    // });
    // builder.addCase(getCareersAction.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   state.careers = [];
    // });
    // Logout
    builder.addCase(logoutUserAction.fulfilled, (state, action) => {
      state.error = null;
      state.user = null;
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
