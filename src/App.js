import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "./constant/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/auth";
import { Home, SignIn, SignUp, Profile } from "./pages";

export default function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <Provider store={store}>

      <Router>
        <IsUserRedirect
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_IN}
          user={user}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_UP}
          user={user}

        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute path={ROUTES.HOME}
          user={user}
          exact>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTES.PROFILE}
          user={user}
          exact>
          <Profile />
        </ProtectedRoute>
      </Router>
    </Provider>
  );
}
