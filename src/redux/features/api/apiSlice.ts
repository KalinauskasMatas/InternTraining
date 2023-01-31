import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { MovieInterface, UserState } from "../../../interfaces";

export const availableMoviesApi = createApi({
  reducerPath: "availableMoviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    getAvailableMovies: builder.query<MovieInterface[], void>({
      query: () => `/movies`,
    }),
    rentMovie: builder.mutation<UserState, string>({
      query: (id) => ({
        url: `/movie/rent`,
        method: "POST",
        body: {
          movieId: id,
        },
      }),
    }),
  }),
});

export const { useGetAvailableMoviesQuery, useRentMovieMutation } =
  availableMoviesApi;
