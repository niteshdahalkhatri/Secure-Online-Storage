import React, { useState } from "react";
import * as s from "./styles/File.style";
import FileDropDown from "../../Dropdown/FileDropDown";
import DeletedFileDropDown from "../../Dropdown/DeletedFileDropDown";

function File({ file }) {
  const [openFileDropdown, setOpenFileDropdown] = useState(false);
  const [openDeleteFile, setOpenDeleteFileDropdown] = useState(false);
  return (
    <>
      <s.FileCardContainer>
        <s.IconContainer>
          {file.encrypted ? <s.FileIconProtected /> : <s.FileIcon />}
        </s.IconContainer>
        <s.CardBodyContaier>
          <s.FileName>{file.name}</s.FileName>
          {!file.moveToBin ? (
            <s.DotIcon onClick={() => setOpenFileDropdown(true)} />
          ) : (
            <s.DotIcon onClick={() => setOpenDeleteFileDropdown(true)} />
          )}
        </s.CardBodyContaier>

        <FileDropDown
          openFileDropdown={openFileDropdown}
          setOpenFileDropdown={setOpenFileDropdown}
          file={file}
        />
        <DeletedFileDropDown
          openDeleteFile={openDeleteFile}
          setOpenDeleteFileDropdown={setOpenDeleteFileDropdown}
          file={file}
        />
      </s.FileCardContainer>
    </>
  );
}

export default File;
