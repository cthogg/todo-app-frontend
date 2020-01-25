import React, { useState } from "react";
import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

interface MultipleTodosProps {
  todos: Todo[];
}
const MultipleTodos: React.FunctionComponent<MultipleTodosProps> = ({
  todos
}: MultipleTodosProps): JSX.Element => {
  const [filterInput, setFilterInput] = useState<string>("");

  return (
    <React.Fragment>
      <form>
        <label>
          Filter:
          <input
            type="text"
            value={filterInput}
            onChange={e => setFilterInput(e.target.value)}
          />
        </label>
      </form>
      <p> {filterInput}</p>
      {todos.map((todo, i) => (
        <SingleTodo key={i} todo={todo}>
          {" "}
        </SingleTodo>
      ))}
    </React.Fragment>
  );
};

export default MultipleTodos;
