import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "./constant/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/auth";
import { Home, SignIn, SignUp, Profile } from "./pages";
import "./css/global.css"

export default function App() {

  return (
    <Provider store={store}>

      <Router>
        <IsUserRedirect
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_UP}

        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute path={ROUTES.HOME}
          exact>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTES.PROFILE}
          exact>
          <Profile />
        </ProtectedRoute>

      </Router>
    </Provider>
  );
}
