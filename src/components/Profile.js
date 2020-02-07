// TODO: convert to typescript

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div></div>;
  }

  return (
    <Fragment>
      <h2>{user.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
    </Fragment>
  );
};

export default Profile;
