import { configureStore } from "@reduxjs/toolkit";
import nasaReducer from "../../marketplace/redux/nasa.slice";

export const store = configureStore({
  reducer: {
    nasa: nasaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
