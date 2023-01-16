import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { UserState } from "../../interfaces";

const initialState: UserState =
  JSON.parse(localStorage.getItem("currUser") as string) || {};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.fname = action.payload.fname;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      localStorage.setItem("currUser", JSON.stringify(state));
    },
    clearUser: (state) => {
      localStorage.removeItem("currUser");
      state = { ...initialState };
      console.log(state);
    },
  },
});

export const { setUser, clearUser } = currentUserSlice.actions;

export const selectCurrUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;
