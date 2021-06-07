import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./Global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
