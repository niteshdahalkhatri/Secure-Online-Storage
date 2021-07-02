import React from "react";
import { useParams } from "react-router-dom";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";

function SearchResults() {
  const { searchTerm } = useParams();
  const { childFiles } = useFolder();
  return (
    <>
      <s.HomeContainer>
        {childFiles.map(
          (childFile) =>
            !childFile.moveToBin &&
            childFile.name === searchTerm && (
              <s.Files key={childFile.id}>
                <File file={childFile} />
              </s.Files>
            )
        )}
      </s.HomeContainer>
    </>
  );
}

export default SearchResults;
