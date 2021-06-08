import React from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";
// import DeletedFile from "../../Dropdown/DeletedFileDropDown";

const ShareByMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function Bin() {
  const { childFiles } = useFolder();
  return (
    <ShareByMeContainer>
      <s.FileContainer>
        {childFiles.map(
          (childFile) =>
            childFile.moveToBin && (
              <s.Files key={childFile.id}>
                <File file={childFile} />
              </s.Files>
            )
        )}
      </s.FileContainer>
    </ShareByMeContainer>
  );
}

export default Bin;
