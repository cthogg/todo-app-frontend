import React, { useState } from "react";
import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

interface MultipleTodosProps {
  todos: Todo[];
  onDelete: Function;
  onChange: Function;
}
const MultipleTodos: React.FunctionComponent<MultipleTodosProps> = ({
  todos,
  onDelete,
  onChange
}: MultipleTodosProps): JSX.Element => {
  const [filterInput, setFilterInput] = useState<string>("");
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(filterInput.toLowerCase())
  );
  return (
    <>
      <section className="section">
        <div className="card">
          <form>
            <label>
              Filter by Title:
              <input
                className={"input"}
                placeholder="Filter"
                type="text"
                value={filterInput}
                onChange={e => setFilterInput(e.target.value)}
              />
            </label>
          </form>
        </div>
      </section>
      {filteredTodos.map((todo, i) => (
        <section className="section" key={i}>
          <div className="card">
            <SingleTodo
              onDelete={id => onDelete(id)}
              todo={todo}
              onChange={(todo: Todo) => onChange(todo)}
            >
              {" "}
            </SingleTodo>
          </div>
        </section>
      ))}
    </>
  );
};

export default MultipleTodos;
