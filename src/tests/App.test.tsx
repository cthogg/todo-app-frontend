import React from "react";
import App from "../App";
import { mockTodos } from "./mocks/mocks";
import renderer from "react-test-renderer";
import MultipleTodos from "../components/MultipleTodos";
import SingleTodo from "../components/SingleTodo";
import TodoForm from "../components/TodoForm";
import { Auth0Provider } from "../react-auth0-spa";
import config from "../auth_config.json";

it("renders App correctly", () => {
  const tree = renderer
    .create(
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        audience={config.audience}
      >
        <App> </App>
      </Auth0Provider>
    )
    .toJSON();
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
