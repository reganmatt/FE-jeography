import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
   
  isAuthenticated ? <div><LogoutButton /> <button>CheckProfile</button> </div>
  : <LoginButton />
    )
};

export default AuthenticationButton;