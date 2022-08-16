import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

const AuthenticationButton =  () => {
  const { isAuthenticated, user } = useAuth0();
  // const getProfile =async () => {
  //   const data = await axios.get(
  //     ``
  //   );
    console.log(useAuth0());
    
  // };

  return isAuthenticated ? (
    <div>
      <LogoutButton />{" "}
      {/* <Link
        to={{
          pathname: `/profile`,
        }}
        onClick={getProfile}
      >
        Your Profile
      </Link> */}
    </div>
  ) : (
    <LoginButton />
  );
};

export default AuthenticationButton;
