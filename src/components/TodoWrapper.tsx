import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import MultipleTodos from "./MultipleTodos";
import { Todo } from "../types";
import axios from "axios";

interface TodoWrapperProps {
  name?: string;
}
const TodoWrapper: React.FunctionComponent<TodoWrapperProps> = ({
  name
}: TodoWrapperProps): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //TODO:this works but is a hack to force a rerender.
  const [num, setNum] = useState<number>(1);
  const fetchTodoRoute = "todos";
  //TODO: make this an environmental variable
  // const apiHost = "http://localhost:4000/";
  const apiHost = "http://todo-app-backend-66315.herokuapp.com/";
  const POST_TODOS = `${apiHost}${fetchTodoRoute}`;
  const DELETE_TODO = `${apiHost}${fetchTodoRoute}`;

  useEffect(() => {
    const FETCH_TODOS = `${apiHost}${fetchTodoRoute}`;

    const fetchTodos = async () => {
      const result = await axios(FETCH_TODOS);
      console.log("result: ", result.data);
      setTodos(result.data);
    };
    fetchTodos();
  }, [num, todos.length]);

  const postTodo = async (todo: Todo) => {
    const result = await axios.post(POST_TODOS, todo);
    console.log("result: ", result);
    //TODO: show error if error
    setNum(num + 1);
  };

  const deleteTodo = async (todoId: string) => {
    const result = await axios.delete(`${DELETE_TODO}/${todoId}`);
    console.log("result: ", result);
    //TODO: show error if error
    setNum(num + 1);
  };

  // TODO: add these mocks as a switch
  const postTodoMock = todo => {
    var newTodos = todos;
    newTodos.push(todo);
    const uTodos = newTodos;
    setTodos(uTodos);
    setNum(num + 1);
  };

  const deleteTodoMock = (id: string) => {
    console.log("todos", todos);
    //TODO: add test here
    const newTodos = todos.filter(todo => todo.id !== id);
    console.log("newTodos: ", newTodos);
    setTodos(newTodos);
    setNum(num + 1);
  };
  return (
    <>
      <TodoForm addTodo={todo => postTodo(todo)} />
      {todos.length > 0 && (
        <MultipleTodos
          onDelete={(id: string) => deleteTodo(id)}
          todos={todos}
        />
      )}
    </>
  );
};

export default TodoWrapper;
