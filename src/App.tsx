import React from "react";
import "./App.sass";
import TodoWrapper from "./components/TodoWrapper";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";

const App: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  //TODO: change domain and audience in auth_config
  return (
    <div>

      <section className="section">
      <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-item">
        <div className="buttons">
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
        </div>
      </div>
</nav>

        <p className="is-size-2"> TODOs </p>
      </section>
      {isAuthenticated && <TodoWrapper> </TodoWrapper>}
    </div>
  );
};

export default App;
