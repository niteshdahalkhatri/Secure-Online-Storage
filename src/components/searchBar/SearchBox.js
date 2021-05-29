import React from "react";
import * as s from "./SearchBox.style";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <s.SearchContainer>
      <s.SearchIcon>
        <BsSearch size="2rem" color="#9966cc" />
      </s.SearchIcon>
      <s.Search type="text" placeholder="Search for files..." />
    </s.SearchContainer>
  );
};

export default SearchBox;
