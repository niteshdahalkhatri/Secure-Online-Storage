import React from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";
import { database } from "../../../firebase";

const ShareByMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function SharedByMe() {
  const { sharedByFiles } = useFolder();
  const fileId = sharedByFiles.map((sharedByFile) => sharedByFile.id);
  function handleMassRemove() {
    fileId.forEach((id) => {
      database.files.doc(id).update({
        sharedTo: [],
        sharedBy: "",
        sharedEmails: [],
      });
    });
  }
  return (
    <ShareByMeContainer>
      <s.BinContainer>
        <s.BinTextContainer>
          <s.ShareIcon />
          <p>Shared By Me</p>
        </s.BinTextContainer>
        <s.DeleteALLButton
          type="button"
          length={sharedByFiles.length}
          onClick={handleMassRemove}
        >
          Remove All
        </s.DeleteALLButton>
      </s.BinContainer>
      <s.HR />
      <s.FileContainer>
        {sharedByFiles.map(
          (childFile) =>
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
