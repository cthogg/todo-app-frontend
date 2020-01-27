import React from "react";
import App from "../App";
import { mockTodos } from "./mocks/mocks";
import renderer from "react-test-renderer";
import MultipleTodos from "../components/MultipleTodos";
import SingleTodo from "../components/SingleTodo";
import TodoForm from "../components/TodoForm";

it("renders App correctly", () => {
  const tree = renderer.create(<App> </App>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders multiple questions correctly", () => {
  const tree = renderer
    .create(
      <MultipleTodos
        onChange={() => null}
        todos={mockTodos}
        onDelete={() => null}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders single TODO correctly", () => {
  const tree = renderer
    .create(
      <SingleTodo
        onChange={() => null}
        todo={mockTodos[0]}
        onDelete={() => null}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders TodoForm correctly", () => {
  const tree = renderer
    .create(<TodoForm addTodo={() => null} title={"Add TODO"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
