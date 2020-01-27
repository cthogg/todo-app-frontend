import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import MultipleTodos from "./MultipleTodos";
import { Todo } from "../types";
import axios from "axios";

const TodoWrapper: React.FunctionComponent = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //FIXME:this works but is a hack to force a re-render.
  const [num, setNum] = useState<number>(1);
  const fetchTodoRoute = "todos";
  //TODO: make this an environmental variable
  // const apiHost = "http://localhost:4000/";
  const apiHost = "https://todo-app-backend-66315.herokuapp.com/";
  const POST_TODOS = `${apiHost}${fetchTodoRoute}`;
  const DELETE_TODO = `${apiHost}${fetchTodoRoute}`;
  const PUT_TODO = `${apiHost}${fetchTodoRoute}`;

  useEffect(() => {
    const FETCH_TODOS = `${apiHost}${fetchTodoRoute}`;

    const fetchTodos = async () => {
      const result = await axios(FETCH_TODOS);
      setTodos(result.data);
    };
    fetchTodos();
  }, [num, todos.length]);

  const postTodo = async (todo: Todo) => {
    const result = await axios.post(POST_TODOS, todo);
    console.log("result: ", result);
    setNum(num + 1);
  };

  const deleteTodo = async (todoId: string) => {
    const result = await axios.delete(`${DELETE_TODO}/${todoId}`);
    console.log("result: ", result);
    setNum(num + 1);
  };

  const putTodo = async (todo: Todo) => {
    const todoId = todo.id;
    const result = await axios.put(`${PUT_TODO}/${todoId}`, todo);
    console.log("result: ", result);
    setNum(num + 1);
  };

  return (
    <>
      <section className="section">
        <div className="card">
          <TodoForm addTodo={todo => postTodo(todo)} title="Add a Task" />
        </div>
      </section>
      {todos.length === 0 && (
        <section className="section">
          {" "}
          <div className="card">
            <p> All Tasks Done </p>
          </div>{" "}
        </section>
      )}
      {todos.length > 0 && (
        <MultipleTodos
          onDelete={(id: string) => deleteTodo(id)}
          todos={todos}
          onChange={(todo: Todo) => putTodo(todo)}
        />
      )}
    </>
  );
};

export default TodoWrapper;
