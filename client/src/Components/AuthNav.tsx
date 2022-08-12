import React from 'react';
import AuthenticationButton from './AuthenticationButton';
import LogoutButton from './LogoutButton';

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;