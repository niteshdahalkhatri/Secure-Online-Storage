import React, { useState } from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";
import { database } from "../../../firebase";
import QuestionModal from "../../modal/QuestionModal";

const ShareByMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function SharedByMe() {
  const { sharedByFiles } = useFolder();
  const [showQuestion, setShowQuestion] = useState(false);
  const Question = "Are you Sure? You Want to remove all files shared by you?";
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
    <>
      <ShareByMeContainer>
        <s.BinContainer>
          <s.BinTextContainer>
            <s.ShareIcon />
            <p>Shared By Me</p>
          </s.BinTextContainer>
          <s.DeleteALLButton
            type="button"
            length={sharedByFiles.length}
            onClick={() => setShowQuestion(true)}
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
      <QuestionModal
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
        handleMassRemove={handleMassRemove}
        question={Question}
      />
    </>
  );
}

export default SharedByMe;
