import { configureStore } from "@reduxjs/toolkit";
import availableMoviesSlice from "./features/availableMovies/availableMoviesSlice";
import currentUserReducer from "./features/currentUser/currentUserSlice";
import registeredUsersSlice from "./features/registeredUsers/registeredUsersSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    registeredUsers: registeredUsersSlice,
    availableMovies: availableMoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
