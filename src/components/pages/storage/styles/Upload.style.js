import styled from "@emotion/styled";
// import { SiLetsencrypt } from "react-icons/si";
import { MdNoEncryption } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";

export const media = {
  mediaMaxWidth475px: "@media(max-width:475px)",
  mediaMaxWidth800px: "@media(max-width:800px)",
};

export const UploadSection = styled.section`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 12rem;
  ${media.mediaMaxWidth475px} {
    margin-right: 0rem;
  }
`;
export const UploadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5rem;
  padding-top: 10rem;
  width: 50%;
  box-shadow: 2rem 2rem 2rem 0.3rem rgba(0, 0, 0, 0.2);
  ${media.mediaMaxWidth800px} {
    width: 80%;
  }
  ${media.mediaMaxWidth475px} {
    width: 100%;
  }
`;
export const UploadIcon = styled(BsFillShieldLockFill)`
  font-size: 18rem;
  margin-top: -5rem;
  margin-bottom: 2rem;
  color: #6a93af;
  z-index: 0;
`;

export const DecryptIcon = styled(MdNoEncryption)`
  font-size: 18rem;
  margin-top: -5rem;
  margin-bottom: 2rem;
  color: #6a93af;
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
  font-size: 1.6rem;
  width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EncrytContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EncryptLabel = styled.label`
  cursor: pointer;
  font-size: 1.8rem;
  margin-right: 0.6rem;
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
  border: 1px solid ${(props) => (props.error ? "red" : "black")};
  padding: 0.8rem 1rem;
  background: inherit;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 1.6rem;
  width: 30rem;
  transition: 0.2s ease-in all;
  letter-spacing: inherit;
  color: ${(props) => (props.error ? "red" : "black")};
  &::placeholder {
    color: ${(props) => (props.error ? "red" : "black")};
    font-size: 1.4rem;
    letter-spacing: inherit;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const sameButtonCss = {
  padding: "0.7rem 1.5rem",
  fontSize: "1.8rem",
  border: "none",
  background: "inherit",
  fontStyle: "inherit",
  fontWeight: "300",
};

export const EncryptButton = styled.button`
  ${sameButtonCss}
  border: 1px solid black;
  margin-right: 1rem;
  color: ${(props) => (props.disabled ? "grey" : "black")};
  transition: 0.2s ease all;
  ${(props) => props.disabled && "pointer-events:none;"}
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor:pointer;")}
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

export const DownloadButton = styled.a`
  ${sameButtonCss}
  border: 1px solid black;
  margin-left: 1rem;
  text-decoration: none;
  color: ${(props) => (props.disabled ? "grey" : "black")};
  font-weight: 400;
  transition: 0.2s ease all;
  ${(props) => props.disabled && "pointer-events:none;"}
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor:pointer;")}
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
