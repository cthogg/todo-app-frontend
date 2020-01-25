import React from "react";
import "./App.sass";
import SingleTodo from "./components/SingleTodo";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="section">
        <p className="is-size-2"> TODOs </p>
      </section>
      <SingleTodo></SingleTodo>
    </div>
  );
};

export default App;
