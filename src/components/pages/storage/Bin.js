import React from "react";
import File from "./File";
import { useFolder } from "../../../hooks/useFolder";
import * as s from "./styles/Home.style";
import styled from "@emotion/styled";

import { database, storage } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
// import DeletedFile from "../../Dropdown/DeletedFileDropDown";

const ShareByMeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

function Bin() {
  const { currentUser } = useAuth();
  const { deletedFiles } = useFolder();

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
  }
  return (
    <ShareByMeContainer>
      <s.BinContainer>
        <s.BinTextContainer>
          <s.TrashIcon />
          <p>Bin</p>
        </s.BinTextContainer>
        <s.DeleteALLButton
          type="button"
          length={deletedFiles.length}
          onClick={handleDelete}
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
  );
}

export default Bin;
