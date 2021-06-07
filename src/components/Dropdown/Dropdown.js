import React from "react";
import * as s from "./styles/Dropdown.style";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// import { useSpring, animated } from "react-spring";

export default function Dropdown({ setOpenDropdown, openDropdown }) {
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
      <s.DropdownItem
        as={Link}
        to="/dashboard/update-profile"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <s.profileIcon />
        <p>Profile Settings</p>
      </s.DropdownItem>
      <s.DropdownItem as={Link} to="/logout" onClick={handleLogout}>
        <s.logoutIcon />
        <p>Logout</p>
      </s.DropdownItem>
    </s.Dropdown>
    // </animated.div>
  );
}
