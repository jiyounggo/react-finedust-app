import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import favorite from "./favorite";
export default configureStore({
  reducer: {
    user: userSlice,
    favorite: favorite,
  },
});
