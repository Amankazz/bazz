import { configureStore } from "@reduxjs/toolkit";
import batteryReducer from "../slices/batterySlice";

export const store = configureStore({
  reducer: {
    battery: batteryReducer,
  },
});
