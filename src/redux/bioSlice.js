import { createSlice } from "@reduxjs/toolkit";

const informationSlice = createSlice({
  name: "information",
  initialState: {
    formValue: {
      name: "",
      age: "",
      email: "",
      gender: "",
    },
  },
  reducers: {
    setFormValue: (state, action) => {
      state.formValue = action.payload;
    },
  },
});

export const { setFormValue } = informationSlice.actions;

export default informationSlice.reducer;
