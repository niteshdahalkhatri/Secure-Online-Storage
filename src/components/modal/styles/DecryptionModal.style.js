import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const DecBackground = styled.div`
  width: 30%;
  height: 50%;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DecModalWrapper = styled.div`
  width: 40rem;
  height: 20rem;
  background: rgba(54, 69, 79, 0.95);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const DecModalInput = styled.input`
  background-color: inherit;
  border: none;
  height: 2.5rem;
  padding: 2rem 2rem;
  width: 75%;
  margin-top: 3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? "red" : "black")};
  font-size: 1.6rem;
  color: ${(props) => (props.error ? "red" : "whiteSmoke")};
  transition: 0.2s ease-in all;
  &::placeholder {
    color: ${(props) => (props.error ? "red" : "whiteSmoke")};
    font-size: 1.4rem;
  }

  &:focus {
    background-color: inherit;
  }
`;
export const DecButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DecModalButton = styled.a`
  color: ${(props) => (props.disabled ? "grey" : "#bcd4e6")};
  margin-top: 3rem;
  padding: 1rem 2rem;
  background-color: inherit;
  border: 1px solid black;
  font-size: 2rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.1s ease all;
  text-decoration: none;
  margin-left: 1rem;
  font-weight: 400;
  ${(props) => props.disabled && "pointer-events:none;"}
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor:pointer;")}

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const ModalDecButton = styled.button`
  color: ${(props) => (props.disabled ? "grey" : "#bcd4e6")};
  margin-top: 3rem;
  padding: 1rem 2rem;
  background-color: inherit;
  border: 1px solid black;
  font-size: 2rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.1s ease all;
  ${(props) => props.disabled && "pointer-events:none;"}
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor:pointer;")}

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const DecCloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: 0.2s ease all;
  color: white;
  &:hover {
    transform: translateY(-0.3rem);
  }
`;
