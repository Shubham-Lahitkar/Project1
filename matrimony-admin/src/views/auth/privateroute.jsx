import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from './isAuthenticated '; // Replace with the actual path

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated
  const isAuthenticatedUser = isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticatedUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

export default PrivateRoute;
