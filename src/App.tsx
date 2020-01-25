import React from "react";
import "./App.sass";
import MultipleTodos from "./components/MultipleTodos";
import { Todo } from "./types";
import TodoForm from "./components/TodoForm";

const mockTodos: Todo[] = [
  {
    title: "Buy Milk",
    id: "1",
    dueDate: "2013-02-08T09",
    description: "Buy milk from Rewe"
  },
  {
    title: "Buy Pizza",
    id: "2",
    dueDate: "2013-02-08T09",
    description: "Ham and Pineapple"
  }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="section">
        <p className="is-size-2"> TODOs </p>
      </section>
      <TodoForm></TodoForm>
      <MultipleTodos todos={mockTodos}> </MultipleTodos>
    </div>
  );
};

export default App;
