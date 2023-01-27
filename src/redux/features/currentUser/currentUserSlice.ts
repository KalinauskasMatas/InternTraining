import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { UserState } from "../../../interfaces";

const initialState: UserState =
  JSON.parse(localStorage.getItem("currUser") as string) || {};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    updateCurrUser: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    clearUser: (state) => {
      state = { ...initialState };
    },
  },
});

export const { setCurrUser, updateCurrUser, clearUser } =
  currentUserSlice.actions;

export const selectCurrUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;
