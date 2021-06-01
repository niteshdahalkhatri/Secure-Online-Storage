import React, { useState } from "react";
import * as s from "./styles/Header.style";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchBox from "../../searchBar/SearchBox";
import Dropdown from "./Dropdown";
import { useAuth } from "../../../contexts/AuthContext";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { currentUser } = useAuth();
  return (
    <s.HeaderContainer>
      <SearchBox />
      <s.UserContainer>
        <s.UserDisplay>
          <s.User>{currentUser.email || "No User"}</s.User>
        </s.UserDisplay>
        <s.UserIconContainer onClick={() => setOpenDropdown(!openDropdown)}>
          <MdKeyboardArrowDown size="3rem" color="#9966cc" />
        </s.UserIconContainer>
        {openDropdown && (
          <Dropdown
            setOpenDropdown={setOpenDropdown}
            openDropdown={openDropdown}
          />
        )}
      </s.UserContainer>
    </s.HeaderContainer>
  );
}

export default Header;
