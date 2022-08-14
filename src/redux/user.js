import { configureStore, createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: "",
      pw: "",
      sidoName: "",
    },
  ],

  reducers: {
    loginUser(state, action) {
      state.push(action.payload);
    },
    sidoName(state, action) {
      state.push(action.payload);
    },
  },
});

export let { loginUser, sidoName } = userSlice.actions;

export default userSlice.reducer;
