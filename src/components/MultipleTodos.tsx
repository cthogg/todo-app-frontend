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
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(filterInput.toLowerCase())
  );
  return (
    <React.Fragment>
      <form>
        <label>
          Filter by Title:
          <input
            type="text"
            value={filterInput}
            onChange={e => setFilterInput(e.target.value)}
          />
        </label>
      </form>
      {filteredTodos.map((todo, i) => (
        <SingleTodo key={i} todo={todo}>
          {" "}
        </SingleTodo>
      ))}
    </React.Fragment>
  );
};

export default MultipleTodos;
