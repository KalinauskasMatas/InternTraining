import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { availableMoviesApi, usersApi } from "./features/api/apiSlice";
import currentUserReducer from "./features/currentUser/currentUserSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    [availableMoviesApi.reducerPath]: availableMoviesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(availableMoviesApi.middleware)
      .concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
