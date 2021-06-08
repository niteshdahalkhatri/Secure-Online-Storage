import React from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";

const ShareWithMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function SharedWithMe() {
  const { sharedFiles } = useFolder();

  return (
    <ShareWithMeContainer>
      <s.FileContainer>
        {sharedFiles.map((childFile) => (
          <s.Files key={childFile.id}>
            <File file={childFile} />
          </s.Files>
        ))}
      </s.FileContainer>
    </ShareWithMeContainer>
  );
}

export default SharedWithMe;
