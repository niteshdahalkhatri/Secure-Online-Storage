import React, { useState } from "react";
import * as s from "./Navbar.style";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <s.mobileMenu showMenu={showMenu}>
        <s.CloseMenuButton onClick={() => setShowMenu(!showMenu)} />
        <s.mobileMenuContainer>
          <s.NavMenuLinks to="/login">Login</s.NavMenuLinks>
          <s.NavMenuLinks to="/register">Register</s.NavMenuLinks>
          <s.Button to="/contact-us">Contact Us</s.Button>
        </s.mobileMenuContainer>
      </s.mobileMenu>
      <s.Nav>
        <s.Logo to="/">SOS</s.Logo>
        <s.MenuBars
          onClick={() => setShowMenu(!showMenu)}
          showMenu={showMenu}
        />

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
