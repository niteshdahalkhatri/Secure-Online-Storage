import React from "react";
import { Link } from "react-router-dom";
import { BsFolderFill } from "react-icons/bs";
import styled from "@emotion/styled";

//FOlder css
const FolderButton = styled.button`
  /* border: 1px solid black; */
  padding: 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  margin-bottom: 2rem;
  transition: 0.2s ease-in all;

  &:link,
  :visited,
  :active {
    color: #6e7f80;
    font-weight: bold;
  }
`;

function Folder({ folder }) {
  return (
    <FolderButton
      as={Link}
      to={{
        pathname: `/dashboard/folder/${folder.id}`,
        state: { folder: folder },
      }}
    >
      <BsFolderFill
        size="4rem"
        style={{ marginRight: "0.6rem" }}
        color="	#9966cc"
      />
      {folder.name}
    </FolderButton>
  );
}

export default Folder;
