import React from "react";
import App, { mockTodos } from "../App";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import MultipleTodos from "../components/MultipleTodos";

it("renders correctly", () => {
  const tree = renderer.create(<App> </App>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders multiple questions correctly", () => {
  const tree = renderer
    .create(
      <MultipleTodos todos={mockTodos} onDelete={() => null}>
        {" "}
      </MultipleTodos>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders TODO", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TODOS/i);
  expect(linkElement).toBeInTheDocument();
});
