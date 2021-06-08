import React from "react";
import { useParams, useLocation } from "react-router-dom";

//custom hook
import { useFolder } from "../../../hooks/useFolder";

//imports
import * as s from "./styles/Home.style";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import File from "./File";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import AddFileButton from "../storage/AddFileButton";

function SideBar() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <s.HomeContainer>
      <s.HomeMain>
        <FolderBreadcrumbs currentFolder={folder} />
        <AddFileButton currentFolder={folder} />
        <AddFolderButton currentFolder={folder} />
      </s.HomeMain>
      {childFolders.length > 0 && (
        <s.FolderContainer>
          {childFolders.map((childFolder) => (
            <s.Folders key={childFolder.id}>
              <Folder folder={childFolder} />
            </s.Folders>
          ))}
        </s.FolderContainer>
      )}

      {childFolders.length > 0 && childFiles.length > 0 && <s.HR />}
      {childFiles.length > 0 && (
        <s.FileContainer>
          {childFiles.map(
            (childFile) =>
              !childFile.moveToBin && (
                <s.Files key={childFile.id}>
                  <File file={childFile} />
                </s.Files>
              )
          )}
        </s.FileContainer>
      )}
      <div id="main-portal"></div>
    </s.HomeContainer>
  );
}

export default SideBar;
