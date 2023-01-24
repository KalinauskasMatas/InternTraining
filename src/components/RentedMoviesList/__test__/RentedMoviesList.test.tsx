import RentedMoviesList from "../RentedMoviesList";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "../../../redux/features/currentUser/currentUserSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
  },
});

afterEach(cleanup);

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <RentedMoviesList />
    </Provider>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RentedMoviesList />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
