import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

it("renders correctly", () => {
  const tree = renderer.create(<App> </App>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders TODO", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TODOS/i);
  expect(linkElement).toBeInTheDocument();
});
