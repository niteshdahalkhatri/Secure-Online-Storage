import styled from "@emotion/styled";
import { AiFillFileAdd, AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";

export const AddFileBtn = styled.button`
  cursor: pointer;
  border: none;
  margin-right: 1rem;
`;
export const AddFileIcon = styled(AiFillFileAdd)`
  font-size: 4rem;
  color: rgb(95, 99, 104);
  border: none;
  border-bottom: 1px solid rgb(115, 115, 115);
  padding: 0.5rem 0.5rem;
  transition: 0.2s ease-in all;
`;

export const UploadIcon = styled(MdCloudUpload)`
  font-size: 15rem;
  margin-top: -8rem;
`;

export const Background = styled.div`
  width: 80%;
  height: 80%;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalWrapper = styled.div`
  width: 60rem;
  height: 40rem;
  background: rgba(54, 69, 79, 0.95);
  color: #000;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const CloseModalButton = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  z-index: 10;
  transition: 0.2s ease all;
  color: white;
  &:hover {
    transform: translateY(-0.3rem);
  }
`;

export const UploadFileContaier = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

export const UploadFile = styled.label`
  font-size: 1.8rem;
  border: 1px solid black;
  padding: 0.7rem 1rem;
  cursor: pointer;
  color: #bcd4e6;
  transition: 0.2s ease all;
  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const FileNameDisplay = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background-color: inherit;
  margin-right: 2rem;
  font-size: 1.8rem;
  width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #bcd4e6;
`;

export const EncrytContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.showKeyInput ? "margin-bottom:0rem" : "margin-bottom:2rem"}
`;

export const EncryptLabel = styled.label`
  cursor: pointer;
  font-size: 1.8rem;
  margin-left: 0.3rem;
  color: #bcd4e6;
`;

export const EncryptFile = styled.input`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
`;

export const EncryptKey = styled.input`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  border: 1px solid black;
  padding: 0.8rem 1rem;
  background: inherit;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 1.6rem;
  width: 30rem;
  transition: 0.2s ease-in all;
  color: ${(props) => (props.error ? "red" : "#bcd4e6")};

  &::placeholder {
    font-size: 1.6rem;
    color: ${(props) => (props.error ? "red" : "#bcd4e6")};
    /* error? 'content:attr(placce)' */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const sameButtonCss = {
  cursor: "pointer",
  padding: "0.7rem 1.5rem",
  fontSize: "1.8rem",
  border: "none",
  background: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
};

export const EncryptButton = styled.button`
  ${sameButtonCss}
  border: 1px solid black;
  margin-right: 1rem;
  color: ${(props) => (props.disabled ? "grey" : "#bcd4e6")};
  transition: 0.2s ease all;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const UploadButton = styled.button`
  ${sameButtonCss}
  border: 1px solid black;
  margin-left: 1rem;
  color: ${(props) => (props.disabled ? "grey" : "#bcd4e6")};
  transition: 0.2s ease all;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 2rem;
`;

export const ProgressLabel = styled.label`
  font-size: 1.5rem;
`;
