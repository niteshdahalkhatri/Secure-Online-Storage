import React, { useState } from "react";
import * as s from "./SearchBox.style";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const handleEnter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13 && searchTerm !== "") {
      history.push(`/dashboard/search-result/${searchTerm}`);
      setSearchTerm("");
    } else {
      return;
    }
  };
  return (
    <>
      <s.SearchContainer>
        <s.SearchIcon>
          <BsSearch color="#9966cc" />
        </s.SearchIcon>
        <s.Search
          type="text"
          placeholder="Search for files..."
          id="searchTerm"
          onKeyUp={handleEnter}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </s.SearchContainer>
    </>
  );
};

export default SearchBox;
