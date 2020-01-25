import React, { useState } from "react";
import { Todo } from "../types";
import SingleTodo from "./SingleTodo";

interface MultipleTodosProps {
  todos: Todo[];
}
const MultipleTodos: React.FunctionComponent<MultipleTodosProps> = ({
  todos
}: MultipleTodosProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <React.Fragment>
      {todos.map((todo, i) => (
        <SingleTodo key={i} todo={todo}>
          {" "}
        </SingleTodo>
      ))}
    </React.Fragment>
  );
};

export default MultipleTodos;
