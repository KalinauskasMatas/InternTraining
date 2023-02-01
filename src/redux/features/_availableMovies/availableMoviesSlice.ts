import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

import { MovieInterface } from "../../../interfaces";
import { RootState } from "../../store";

const initialState: MovieInterface[] = [];

const availableMoviesSlice = createSlice({
  name: "availableMovies",
  initialState,
  reducers: {
    returnMovie: (state, action: PayloadAction<string>) => {
      const movieIndex = state.findIndex(
        (movie: MovieInterface) => movie.name === action.payload
      );

      if (movieIndex === -1) return;
      state[movieIndex].stock++;
      localStorage.setItem("availableMovies", JSON.stringify(state));
    },
  },
});

export const { returnMovie } = availableMoviesSlice.actions;

// export const selectAvailableMovies = (state: RootState) =>
//   state.availableMovies;

export default availableMoviesSlice.reducer;
