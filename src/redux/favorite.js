import { createSlice } from "@reduxjs/toolkit";

let favorite = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeStar(state, action) {
      state[action.payload].star = false;
    },
  },
});

export let { addItem, removeStar } = favorite.actions;

export default favorite.reducer;
