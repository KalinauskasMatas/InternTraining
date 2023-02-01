import ProfileViewer from "../ProfileViewer";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "../../../redux/features/currentUser/currentUserSlice";

afterEach(cleanup);

const testUser = {
  _id: "123456",
  fname: "test",
  surname: "user",
  email: "test@user",
  password: "12345678",
  rentMovies: [],
  isAdmin: false,
};

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
  },
});

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <ProfileViewer profile={testUser} />
    </Provider>
  );
});

it("renders correctly 1", () => {
  render(
    <Provider store={store}>
      <ProfileViewer profile={testUser} />
    </Provider>
  );
  expect(screen.getByTestId("profile-name")).toHaveTextContent("test");
  expect(screen.getByTestId("profile-surname")).toHaveTextContent("user");
  expect(screen.getByTestId("profile-email")).toHaveTextContent("test@user");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ProfileViewer profile={testUser} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
