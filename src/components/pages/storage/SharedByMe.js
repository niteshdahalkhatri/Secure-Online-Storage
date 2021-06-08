import React from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";

const ShareByMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function SharedByMe() {
  const { childFiles } = useFolder();
  return (
    <ShareByMeContainer>
      <s.FileContainer>
        {childFiles.map(
          (childFile) =>
            childFile.sharedBy &&
            !childFile.moveToBin && (
              <s.Files key={childFile.id}>
                <File file={childFile} />
              </s.Files>
            )
        )}
      </s.FileContainer>
    </ShareByMeContainer>
  );
}

export default SharedByMe;
