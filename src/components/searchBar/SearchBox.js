import React, { useState } from "react";
import * as s from "./SearchBox.style";
import { BsSearch } from "react-icons/bs";
import { useFolder } from "../../hooks/useFolder";
import SearchResults from "../pages/storage/SearchResults";
import { useHistory } from "react-router";

const SearchBox = () => {
  const history = useHistory();
  const handleSearch = () => {};
  const { childFiles } = useFolder();
  return (
    <>
      <s.SearchContainer>
        <s.SearchIcon>
          <BsSearch size="2rem" color="#9966cc" />
        </s.SearchIcon>
        <s.Search type="text" placeholder="Search for files..." />
      </s.SearchContainer>
    </>
  );
};

export default SearchBox;
