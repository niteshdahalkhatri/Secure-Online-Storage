import React from "react";
import * as s from "./Navbar.style";

export default function Navbar() {
  return (
    <>
      <s.Nav>
        <s.Logo to="/">SOS</s.Logo>
        <s.MenuBars />
        <s.NavMenu>
          <s.NavMenuLinks to="/login">Login</s.NavMenuLinks>
          <s.NavMenuLinks to="/register">Register</s.NavMenuLinks>
        </s.NavMenu>
        <s.NavBtn>
          <s.Button to="/contact-us">Contact Us</s.Button>
        </s.NavBtn>
      </s.Nav>
    </>
  );
}
