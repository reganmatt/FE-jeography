import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const AuthenticationButton =  () => {
  const { isAuthenticated, user } = useAuth0();
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}

export default AuthenticationButton;

