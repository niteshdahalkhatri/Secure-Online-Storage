import React from "react";
import { Link } from "react-router-dom";
import { BsFolderFill } from "react-icons/bs";
import styled from "@emotion/styled";

//FOlder css
const FolderButton = styled.button`
  border: 1px solid rgb(145, 163, 176);
  padding: 1rem 2rem;
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

  &:hover {
    color: #5d8aa8;
    text-decoration: none;
  }
`;

function Folder({ folder }) {
  return (
    <FolderButton
      as={Link}
      to={{
        pathname: `/dashboard/folders/${folder.id}`,
        state: { folder: folder },
      }}
    >
      <BsFolderFill
        size="2rem"
        style={{ marginRight: "1rem" }}
        color="	rgb(95,99,104)"
      />
      {folder.name}
    </FolderButton>
  );
}

export default Folder;
