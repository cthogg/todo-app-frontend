import React, { useState } from "react";
import TodoForm from "./TodoForm";
import MultipleTodos from "./MultipleTodos";
import { Todo } from "../types";
import { mockTodos } from "../App";

interface TodoWrapperProps {
  name?: string;
}
const TodoWrapper: React.FunctionComponent<TodoWrapperProps> = ({
  name
}: TodoWrapperProps): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  //TODO:this works but is a hack to force a rerender.
  const [num, setNum] = useState<number>(1);
  return (
    <>
      <TodoForm
        addTodo={todo => {
          var newTodos = todos;
          newTodos.push(todo);
          const uTodos = newTodos;
          setTodos(uTodos);
          setNum(num + 1);
        }}
      />
      <MultipleTodos
        onDelete={(id: string) => {
          console.log("todos", todos);
          //TODO: add test here
          const newTodos = todos.filter(todo => todo.id !== id);
          console.log("newTodos: ", newTodos);
          setTodos(newTodos);
          setNum(num + 1);
        }}
        todos={todos}
      />{" "}
    </>
  );
};

export default TodoWrapper;
