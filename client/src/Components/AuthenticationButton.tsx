import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const AuthenticationButton =  () => {

  const navigate = useNavigate();
  function handleClickProfile() {
    return navigate("/profile");
  }

  const { isAuthenticated, user } = useAuth0();
  return isAuthenticated ? <div onClick={handleClickProfile} className='log-profile-container'> <button className='log-profile-btn'>Profile</button> <LogoutButton /></div> : <LoginButton />;
}

export default AuthenticationButton;

