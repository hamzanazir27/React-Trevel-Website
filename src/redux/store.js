import { configureStore } from "@reduxjs/toolkit";
import recentTripsReducer from "./recentTripSlice";

export const store = configureStore({
  reducer: {
    recentTrips: recentTripsReducer,
  },
});
