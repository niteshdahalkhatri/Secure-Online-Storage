import React from "react";
import { useParams, useLocation } from "react-router-dom";

//custom hook
import { useFolder } from "../../../hooks/useFolder";

//imports
import * as s from "./styles/Home.style";
import Slider from "../../slider/Slider";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";

function SideBar() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId, state.folder);
  return (
    <s.HomeContainer>
      <Slider />
      <s.HR />
      <s.ScrollContainer>
        <s.HomeMain>
          <span>BreadCrumb</span>
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
      </s.ScrollContainer>
    </s.HomeContainer>
  );
}

export default SideBar;
