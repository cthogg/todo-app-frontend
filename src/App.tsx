import React from "react";
import "./App.sass";
import { Todo } from "./types";
import TodoWrapper from "./components/TodoWrapper";

export const mockTodos: Todo[] = [
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
    <div>
      <section className="section">
        <p className="is-size-2"> TODOs </p>
      </section>
      <TodoWrapper> </TodoWrapper>
    </div>
  );
};

export default App;
