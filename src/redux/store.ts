import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

