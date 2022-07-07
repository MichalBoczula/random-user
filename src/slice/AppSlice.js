import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "slice",
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  reducers: {
    SetData: (state) => {
      state.loading = true;
    },
  },
});

export const { SetData } = slice.actions;
export const firstName = (state) => state.user.firstName;
export const lastName = (state) => state.user.lastName;
export const email = (state) => state.user.email;
export default slice.reducer;
