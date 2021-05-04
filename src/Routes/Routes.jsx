import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import { PrivateRoutes } from "./PrivateRoutes";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <PrivateRoutes exact path="/dashboard">
        <Dashboard />
      </PrivateRoutes>
      <PrivateRoutes exact path="/profile">
        <Profile />
      </PrivateRoutes>
      <Route>
        <p>error 404 : page not found</p>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
