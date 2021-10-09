import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constant/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/auth";
// import { useAuthListener } from "./hooks/";
import { Home, SignIn, SignUp, Profile } from "./pages";
export default function App() {
  // const { user } = useAuthListener();
  const user = true;
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.HOME}
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.HOME}
        path={ROUTES.SIGN_UP}
      >
        <SignUp />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.HOME} exact>
        <Home />
      </ProtectedRoute>
      <ProtectedRoute user={user} path={ROUTES.PROFILE} exact>
        <Profile />
      </ProtectedRoute>
    </Router>
  );
}
