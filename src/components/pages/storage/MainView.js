import React from "react";
import * as s from "./styles/MainView.style";

function MainView({ children }) {
  return <s.MainViewContainer>{children}</s.MainViewContainer>;
}

export default MainView;
