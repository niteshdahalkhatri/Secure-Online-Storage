import styled from "@emotion/styled";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineFileProtect } from "react-icons/ai";

export const FileCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14.4rem;
  border: 1px solid rgb(145, 163, 176);
  border-radius: 5px;
  overflow: hidden;
  height: 15rem;

  /* box-shadow: 0 0 1.5rem -0.5rem; */
`;

export const IconContainer = styled.div`
  align-self: center;
`;

export const FileIcon = styled(FaFileAlt)`
  font-size: 4rem;
  margin-top: 3rem;
  color: rgb(115, 115, 115);
`;

export const FileIconProtected = styled(AiOutlineFileProtect)`
  font-size: 4rem;
  margin-top: 3rem;
  color: rgb(115, 115, 115);
`;

export const CardBodyContaier = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-top: 1px solid rgb(145, 163, 176);
  padding-top: 1rem;
`;

export const FileName = styled.p`
  margin: 0;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  margin-left: 0.8rem;
`;

export const DotIcon = styled(BsThreeDotsVertical)`
  font-size: 1.5rem;
  width: 20%;
  cursor: pointer;
  color: black;
`;
