import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/linkedin" component={LinkedInPopUp} />
      </Switch>
    </BrowserRouter>
  );
}
