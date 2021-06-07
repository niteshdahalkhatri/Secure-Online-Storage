import React, { useState } from "react";
import * as s from "./styles/File.style";
import FileDropDown from "../../Dropdown/FileDropDown";

function File({ file }) {
  const [openFileDropdown, setOpenFileDropdown] = useState(false);
  return (
    <>
      <s.FileCardContainer>
        <s.IconContainer>
          {file.encrypted ? <s.FileIconProtected /> : <s.FileIcon />}
        </s.IconContainer>
        <s.CardBodyContaier>
          <s.FileName>{file.name}</s.FileName>
          <s.DotIcon onClick={() => setOpenFileDropdown(true)} />
        </s.CardBodyContaier>

        <FileDropDown
          openFileDropdown={openFileDropdown}
          setOpenFileDropdown={setOpenFileDropdown}
          file={file}
        />
      </s.FileCardContainer>
    </>
  );
}

export default File;
