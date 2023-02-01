import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { availableMoviesApi } from "./features/api/apiSlice";
// import availableMoviesSlice from "./features/availableMovies/availableMoviesSlice";
import currentUserReducer from "./features/currentUser/currentUserSlice";
import registeredUsersSlice from "./features/registeredUsers/registeredUsersSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    registeredUsers: registeredUsersSlice,
    // availableMovies: availableMoviesSlice,
    [availableMoviesApi.reducerPath]: availableMoviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(availableMoviesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
