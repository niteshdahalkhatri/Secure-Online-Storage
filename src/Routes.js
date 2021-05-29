import React from "react";
import { Switch, Route } from "react-router-dom";

//Auth Provider
import { AuthProvider } from "./contexts/AuthContext";
// import PrivateRoute from "./components/authentication/PrivateRoute";

//components
import App from "./App";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ContactUs from "./components/pages/landing-page/ContactUs";
import ForgotPassword from "./components/authentication/ForgotPassword";
import Hero from "./components/pages/landing-page/Hero";

const Routes = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/forgot-password" component={ForgotPassword} />
        {/* <PrivateRoute path="/dashboard" component={App} /> */}
        <Route path="/dashboard" component={App} />
      </Switch>
    </AuthProvider>
  );
};

export default Routes;
