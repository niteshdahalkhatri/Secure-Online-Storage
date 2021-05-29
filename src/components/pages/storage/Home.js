import React from "react";
import * as s from "./styles/Home.style";
import Slider from "../../slider/Slider";

function SideBar() {
  return (
    <s.HomeContainer>
      <Slider />
      <s.HR />
      <s.HomeMain>
        <span>BreadCrumb</span>
        <span>Add Folder Icon</span>
      </s.HomeMain>
    </s.HomeContainer>
  );
}

export default SideBar;
