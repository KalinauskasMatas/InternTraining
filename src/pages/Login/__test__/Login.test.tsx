import Login from "../Login";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import registeredUsersSlice from "../../../redux/features/registeredUsers/registeredUsersSlice";

afterEach(cleanup);

const store = configureStore({
  reducer: {
    registeredUsers: registeredUsersSlice,
  },
});

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
});

it("matches with snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
