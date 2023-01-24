import MoviesList from "../MoviesList";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import availableMoviesSlice from "../../../redux/features/availableMovies/availableMoviesSlice";
import currentUserSlice from "../../../redux/features/currentUser/currentUserSlice";

const store = configureStore({
  reducer: {
    availableMovies: availableMoviesSlice,
    currentUser: currentUserSlice,
  },
});

afterEach(cleanup);

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <MoviesList />
    </Provider>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
