// src/components/logout-button.js

import React from 'react';
import { StyledLoginButton } from '../Styles/styledElements';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <StyledLoginButton
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </StyledLoginButton>
  );
};

export default LogoutButton;