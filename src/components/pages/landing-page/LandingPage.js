import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Login from "../../authentication/Login";
import ContactUs from "./ContactUs";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function LandingPage() {
  const { path } = useRouteMatch();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={path} component={Hero} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Hero />
        </Route>
        <Route path={`${path}/contact-us`} component={ContactUs} />
      </Switch>
    </>
  );
}

export default LandingPage;
