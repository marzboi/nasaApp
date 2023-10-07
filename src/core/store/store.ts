import { configureStore } from "@reduxjs/toolkit";
import marketplaceReducer from "../../marketplace/redux/marketplace.slice";

export const store = configureStore({
  reducer: {
    marketplace: marketplaceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
