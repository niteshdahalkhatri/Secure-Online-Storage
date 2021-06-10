import styled from "@emotion/styled";
import { BsFillTrash2Fill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";

export const HomeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

export const HR = styled.hr`
  border-top: 1px solid #c5c5c5;
`;

export const HomeMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem 2rem;
  span {
    align-self: center;
    margin: 0 0 0 1rem;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;
`;

export const FileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2rem 0 2rem;
`;

export const Folders = styled.div`
  max-width: 25rem;
  padding: 1rem;
`;

export const Files = styled.div`
  max-width: 25rem;
  padding: 1rem;
`;

export const BinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 3rem;
`;

export const BinTextContainer = styled.div`
  display: flex;

  p {
    font-size: 1.8rem;
    align-self: flex-end;
    letter-spacing: 0.2rem;
  }
`;
export const TrashIcon = styled(BsFillTrash2Fill)`
  font-size: 2.5rem;
  margin-right: 0.6rem;
`;

export const ShareIcon = styled(AiOutlineShareAlt)`
  font-size: 2.5rem;
  margin-right: 0.6rem;
`;

const sameButtonCss = {
  padding: "0.7rem 1.5rem",
  fontSize: "1.8rem",
  border: "none",
  background: "inherit",
  fontStyle: "inherit",
};
export const DeleteALLButton = styled.button`
  align-self: center;
  ${sameButtonCss}
  border: 1px solid black;
  margin-right: 1rem;
  color: ${(props) => (props.length > 0 ? "black" : "grey")};
  transition: 0.2s ease all;
  ${(props) => !props.length > 0 && "pointer-events:none;"}
  ${(props) => (!props.length > 0 ? "cursor: not-allowed;" : "cursor:pointer;")}
  letter-spacing: inherit;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;
