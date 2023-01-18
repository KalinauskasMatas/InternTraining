import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../interfaces";
import { RootState } from "../../store";

const initialState: UserState[] =
  JSON.parse(localStorage.getItem("registeredUsers") as string) || [];

const registeredUsersSlice = createSlice({
  name: "registeredUsers",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserState>) => {
      state.push({
        fname: action.payload.fname,
        surname: action.payload.surname,
        email: action.payload.email,
        password: action.payload.password,
        rentMovies: action.payload.rentMovies,
      });

      localStorage.setItem("registeredUsers", JSON.stringify(state));
    },

    updateUser: (state, action: PayloadAction<UserState>) => {
      const userIndex = state.findIndex(
        (user) => user.email === action.payload.email
      );
      if (userIndex === -1) return;
      state[userIndex] = { ...action.payload };

      localStorage.setItem("registeredUsers", JSON.stringify(state));
    },

    usersSetEmail: (
      state,
      action: PayloadAction<{ user: UserState; newEmail: string }>
    ) => {
      const userIndex = state.findIndex(
        (user) => user.email === action.payload.user.email
      );

      if (userIndex === -1) return;
      state[userIndex] = {
        ...state[userIndex],
        email: action.payload.newEmail,
      };

      localStorage.setItem("registeredUsers", JSON.stringify(state));
    },
  },
});

export const { registerUser, updateUser, usersSetEmail } =
  registeredUsersSlice.actions;

export const selectRegisteredUsers = (state: RootState) =>
  state.registeredUsers;

export default registeredUsersSlice.reducer;
