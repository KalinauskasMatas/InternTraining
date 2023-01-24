import Footer from "../Footer";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Footer />);
});

it("matches snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
