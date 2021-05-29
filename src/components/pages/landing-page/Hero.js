import React from "react";
import * as s from "./Hero.style";
import { Button } from "./Navbar.style";

export default function Hero() {
  return (
    <s.HeroSection>
      <s.HeroImage>
        <s.HeroTitle>
          <h1>Store Your Data Securely Online.</h1>
        </s.HeroTitle>
        <s.HeroContent>
          <p>
            By just siging up you can protect your data from malicious users for
            free.
            <br /> So, Why Wait? Join us now!
          </p>
        </s.HeroContent>
        <Button to="/register">Join Us</Button>
      </s.HeroImage>
    </s.HeroSection>
  );
}
