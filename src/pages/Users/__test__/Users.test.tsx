import Users from "../Users";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import registeredUsersSlice from "../../../redux/features/registeredUsers/registeredUsersSlice";
import currentUserSlice from "../../../redux/features/currentUser/currentUserSlice";

import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const store = configureStore({
  reducer: {
    registeredUsers: registeredUsersSlice,
    currentUser: currentUserSlice,
  },
});

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    </Provider>
  );
});

it("matches with snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Users />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
