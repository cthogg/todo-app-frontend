import React from "react";
import "./App.sass";
import TodoWrapper from "./components/TodoWrapper";

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
