import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import MultipleTodos from "./MultipleTodos";
import { Todo } from "../types";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";

const apiHost = process.env.REACT_APP_API_HOST;
const fetchTodoRoute = "todos";
const POST_TODOS = `${apiHost}${fetchTodoRoute}`;
const DELETE_TODO = `${apiHost}${fetchTodoRoute}`;
const PUT_TODO = `${apiHost}${fetchTodoRoute}`;

const TodoWrapper: React.FunctionComponent = (): JSX.Element => {
  const { getTokenSilently } = useAuth0();

  const [todos, setTodos] = useState<Todo[]>([]);
  //FIXME:this works but is a hack to force a re-render.
  const [num, setNum] = useState<number>(1);

  useEffect(() => {
    const FETCH_TODOS = `${apiHost}${fetchTodoRoute}`;

    const fetchTodos = async () => {
      try {
        const token = await getTokenSilently();
        const result = await axios(FETCH_TODOS, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTodos(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, [getTokenSilently, num]);

  const postTodo = async (todo: Todo) => {
    const token = await getTokenSilently();

    const result = await axios.post(POST_TODOS, todo, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("result: ", result);
    setNum(num + 1);
  };

  const deleteTodo = async (todoId: string) => {
    const token = await getTokenSilently();

    const result = await axios.delete(`${DELETE_TODO}/${todoId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("result: ", result);
    setNum(num + 1);
  };

  const putTodo = async (todo: Todo) => {
    const token = await getTokenSilently();

    const todoId = todo.id;
    const result = await axios.put(`${PUT_TODO}/${todoId}`, todo, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
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
