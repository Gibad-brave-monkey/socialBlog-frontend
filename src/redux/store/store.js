import { configureStore } from "@reduxjs/toolkit";
import authReduces from "redux/slices/authSlice";

export const store = configureStore({
  reducer: authReduces,
});
