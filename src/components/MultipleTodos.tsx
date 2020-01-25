import React, { useState } from "react";
import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

interface MultipleTodosProps {
  todos: Todo[];
  onDelete: Function;
}
const MultipleTodos: React.FunctionComponent<MultipleTodosProps> = ({
  todos,
  onDelete
}: MultipleTodosProps): JSX.Element => {
  const [filterInput, setFilterInput] = useState<string>("");
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(filterInput.toLowerCase())
  );
  return (
    <section className="section">
      <div className="card">
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
          <SingleTodo onDelete={id => onDelete(id)} key={i} todo={todo}>
            {" "}
          </SingleTodo>
        ))}
      </div>
    </section>
  );
};

export default MultipleTodos;
