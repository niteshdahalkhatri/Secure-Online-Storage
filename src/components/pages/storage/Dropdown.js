import React from "react";
import * as s from "./styles/Dropdown.style";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

// import { useSpring, animated } from "react-spring";

export default function Dropdown() {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {
      history.push("/error");
    }
  }

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
        <p onClick={handleLogout}>
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
