import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import LandingPage from "./components/pages/landing-page/LandingPage";
import App from "./App";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/dashboard" component={App} />
    </Switch>
  );
};

export default Routes;
