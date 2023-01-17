import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

import { MovieInterface } from "../../interfaces";
import { RootState } from "../../store";

import defaultData from "../../../defaultData.json";

// async function getMovies() {
//   try {
//     const response = await axios.get("./defaultData.json");
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

const initialState: MovieInterface[] =
  JSON.parse(localStorage.getItem("availableMovies") as string) || defaultData;

const availableMoviesSlice = createSlice({
  name: "availableMovies",
  initialState,
  reducers: {
    rentMovie: (state, action: PayloadAction<string>) => {
      const movieIndex = state.findIndex(
        (movie: MovieInterface) => movie.name === action.payload
      );
      if (movieIndex === -1) return;
      if (state[movieIndex].stock < 1) return;
      state[movieIndex].stock--;
    },
  },
});

export const { rentMovie } = availableMoviesSlice.actions;

export const selectAvailableMovies = (state: RootState) =>
  state.availableMovies;

export default availableMoviesSlice.reducer;
