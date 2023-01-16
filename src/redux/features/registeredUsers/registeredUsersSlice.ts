import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../interfaces";
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
      });

      localStorage.setItem("registeredUsers", JSON.stringify(state));
    },
  },
});

export const { registerUser } = registeredUsersSlice.actions;

export const selectRegisteredUsers = (state: RootState) =>
  state.registeredUsers;

export default registeredUsersSlice.reducer;
