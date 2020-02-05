import React from "react";
import "./App.sass";
import TodoWrapper from "./components/TodoWrapper";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";

const App: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <section className="section">
        {!isAuthenticated && (
          <button className="button" onClick={() => loginWithRedirect({})}>
            {" "}
            Login{" "}
          </button>
        )}

        {isAuthenticated && (
          <button onClick={() => logout()} className="button">
            {" "}
            Logout{" "}
          </button>
        )}
        <Profile></Profile>
        <p className="is-size-2"> TODOs </p>
      </section>
      {isAuthenticated && <TodoWrapper> </TodoWrapper>}
    </div>
  );
};

export default App;
