import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { ROOT_FOLDER } from "../../../hooks/useFolder";
import { Link } from "react-router-dom";
import "./styles/FolderBreadcrumb.scss";

function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];
  return (
    <Breadcrumb className="grow" listProps={{ className: "bgplm" }}>
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/dashboard/folders/${folder.id}` : "/",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
          className="ttdin"
          style={{ maxWidth: "150px" }}
        >
          {folder.name}/
        </Breadcrumb.Item>
      ))}
      {currentFolder && (
        <Breadcrumb.Item className="ttdin" style={{ maxWidth: "200px" }} active>
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default FolderBreadcrumbs;
