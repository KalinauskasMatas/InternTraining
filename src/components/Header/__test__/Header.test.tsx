import Header from "../Header";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Header title="Title" />);
});

it("renders header correctly", () => {
  render(<Header title={"Title"} />);
  expect(screen.getByTestId("header-title")).toHaveTextContent("Title");
});

it("renders header correctly 2", () => {
  render(<Header title={"title-2"} />);
  expect(screen.getByTestId("header-title")).toHaveTextContent("title-2");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Header title={"Title"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Header title={"Other title"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
