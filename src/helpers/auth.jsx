import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import { useSelector } from "react-redux";

export function IsUserRedirect({ loggedInPath, children, ...rest }) {
  const user = useSelector((state) => state.auth.loggedIn);

  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, ...rest }) {
  const user = useSelector((state) => state.auth.loggedIn);

  console.log(`user`, user);
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGN_IN,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
