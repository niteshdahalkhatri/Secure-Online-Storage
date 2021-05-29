import React, { useState } from "react";
import * as s from "./styles/Header.style";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchBox from "../../searchBar/SearchBox";
import Dropdown from "./Dropdown";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <s.HeaderContainer>
      <SearchBox />
      <s.UserContainer>
        <s.UserDisplay>
          <s.User>I Am Userrrrrrrrrrrrrrrrr</s.User>
        </s.UserDisplay>
        <s.UserIconContainer onClick={() => setOpenDropdown(!openDropdown)}>
          <MdKeyboardArrowDown size="3rem" />
        </s.UserIconContainer>
        {openDropdown && <Dropdown />}
      </s.UserContainer>
    </s.HeaderContainer>
  );
}

export default Header;
