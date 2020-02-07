import React from "react";
import "./App.sass";
import TodoWrapper from "./components/TodoWrapper";
import { useAuth0 } from "./react-auth0-spa";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  //TODO: change domain and audience in auth_config
  return (
    <div>
      <section className="section">
        <NavBar
          isAuthenticated={isAuthenticated}
          loginWithRedirect={loginWithRedirect}
          logout={logout}
        >
          {" "}
        </NavBar>
        <p className="is-size-2"> TODOs </p>
      </section>
      {isAuthenticated && <TodoWrapper> </TodoWrapper>}
    </div>
  );
};

export default App;
