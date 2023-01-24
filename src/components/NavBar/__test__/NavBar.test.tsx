import NavBar from "../NavBar";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { BrowserRouter } from "react-router-dom";
import currentUserSlice, {
  setCurrUser,
} from "../../../redux/features/currentUser/currentUserSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
  },
});

afterEach(cleanup);

const testUser = {
  fname: "test",
  surname: "user",
  email: "test@user",
  password: "12345678",
  rentMovies: [],
  isAdmin: false,
};

it("renders without crashing not admin", () => {
  store.dispatch(setCurrUser(testUser));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
});

it("renders without crashing admin", () => {
  store.dispatch(setCurrUser({ ...testUser, isAdmin: true }));
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
});

it("matches snapshot non admin", () => {
  store.dispatch(setCurrUser(testUser));
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot admin", () => {
  store.dispatch(setCurrUser({ ...testUser, isAdmin: true }));
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
