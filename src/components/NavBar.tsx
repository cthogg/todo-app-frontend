import React from "react";
import Profile from "./Profile";

interface NavBarProps {
  isAuthenticated: boolean;
  loginWithRedirect: Function;
  logout: Function;
}
const NavBar: React.FunctionComponent<NavBarProps> = ({
  isAuthenticated,
  loginWithRedirect,
  logout
}: NavBarProps): JSX.Element => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <p className="is-size-2"> TODOs </p>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Profile></Profile>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
