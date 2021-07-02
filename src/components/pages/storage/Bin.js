import React, { useState } from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";

import { database, storage } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import QuestionModal from "../../modal/QuestionModal";
import { useNotification } from "../../../contexts/NotificationProvider";
// import DeletedFile from "../../Dropdown/DeletedFileDropDown";

const ShareByMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function Bin() {
  const { currentUser } = useAuth();
  const { deletedFiles } = useFolder();
  const [showQuestion, setShowQuestion] = useState(false);
  const { setMessage, setShowNotification } = useNotification();
  const Question =
    "Are you Sure? You will not be able to retrieve any deleted files?";

  function handleDelete() {
    const storedFilePath = deletedFiles.map((deletedFile) => {
      return deletedFile.path;
    });

    storedFilePath.forEach((path) => {
      storage.ref(`files/${currentUser.uid}${path}`).delete();
    });

    const toBedeleteFile = deletedFiles.map((deletedFile) => {
      return deletedFile.id;
    });
    toBedeleteFile.forEach((id) => {
      database.files.doc(id).delete();
    });
    setMessage("All Files Deleted");
    setShowNotification(true);
  }
  return (
    <>
      <ShareByMeContainer>
        <s.BinContainer>
          <s.BinTextContainer>
            <s.TrashIcon />
            <p>Bin</p>
          </s.BinTextContainer>
          <s.DeleteALLButton
            type="button"
            length={deletedFiles.length}
            onClick={() => setShowQuestion(true)}
          >
            Delete All
          </s.DeleteALLButton>
        </s.BinContainer>

        <s.HR />
        <s.FileContainer>
          {deletedFiles.map((deletdFile) => (
            <s.Files key={deletdFile.id}>
              <File file={deletdFile} />
            </s.Files>
          ))}
        </s.FileContainer>
      </ShareByMeContainer>
      <QuestionModal
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
        handleMassRemove={handleDelete}
        question={Question}
      />
    </>
  );
}

export default Bin;
