import AuthForm from "../AuthForm";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { store } from "../../../redux/store";

afterEach(cleanup);

it("renders login without crashing", () => {
  render(
    <Provider store={store}>
      <AuthForm isRegister={false} />
    </Provider>
  );
});

it("renders register without crashing", () => {
  render(
    <Provider store={store}>
      <AuthForm isRegister={true} />
    </Provider>
  );
});

it("matches login snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AuthForm isRegister={false} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches register snapshot", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AuthForm isRegister={true} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
