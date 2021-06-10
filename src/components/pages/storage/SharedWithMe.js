import React from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";
import { database } from "../../../firebase";

const ShareWithMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function SharedWithMe() {
  const { sharedFiles } = useFolder();
  const fileId = sharedFiles.map((sharedFile) => sharedFile.id);
  function handleMassRemove() {
    console.log(fileId);
    // database.files.doc(fileId).update({

    // })
  }

  return (
    <ShareWithMeContainer>
      <s.BinContainer>
        <s.BinTextContainer>
          <s.ShareIcon />
          <p>Shared With Me</p>
        </s.BinTextContainer>
        <s.DeleteALLButton
          type="button"
          length={sharedFiles.length}
          onClick={handleMassRemove}
        >
          Remove All
        </s.DeleteALLButton>
      </s.BinContainer>
      <s.HR />
      <s.FileContainer>
        {sharedFiles.map(
          (childFile) =>
            !childFile.moveToBin && (
              <s.Files key={childFile.id}>
                <File file={childFile} />
              </s.Files>
            )
        )}
      </s.FileContainer>
    </ShareWithMeContainer>
  );
}

export default SharedWithMe;
