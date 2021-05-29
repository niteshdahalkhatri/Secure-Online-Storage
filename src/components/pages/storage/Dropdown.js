import React from "react";
import * as s from "./styles/Dropdown.style";
import { Link } from "react-router-dom";
// import { useSpring, animated } from "react-spring";

export default function Dropdown() {
  //   const animation = useSpring({
  //     config: {
  //       duration: 250,
  //     },
  //     opacity: openDropdown ? 1 : 0,
  //     transform: openDropdown ? `translateY(0%)` : `translateY(-100%)`,
  //   });

  return (
    // <animated.div style={animation}>
    <s.Dropdown>
      <s.DropdownItem>
        <s.profileIcon />
        <p>
          <Link
            to="/profile-settings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Profile Settings
          </Link>
        </p>
      </s.DropdownItem>
      <s.DropdownItem>
        <s.logoutIcon />
        <p>
          <Link
            to="/logout"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Logout
          </Link>
        </p>
      </s.DropdownItem>
    </s.Dropdown>
    // </animated.div>
  );
}
