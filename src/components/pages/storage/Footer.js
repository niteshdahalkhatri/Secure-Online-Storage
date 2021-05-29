import React from "react";
import * as s from "./styles/Footer.style";

function Footer() {
  return (
    <s.FooterContainer>
      <s.FooterContent>
        Copyright &copy; {new Date().getFullYear()} Secure Online Storage NP,
        Inc. All rights reserved.
      </s.FooterContent>
    </s.FooterContainer>
  );
}

export default Footer;
