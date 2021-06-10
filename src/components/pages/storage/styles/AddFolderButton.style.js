import styled from "@emotion/styled";
import { AiFillFolderAdd, AiOutlineClose } from "react-icons/ai";

export const AddFolderBtn = styled.button`
  cursor: pointer;
  border: none;
`;
export const AddFolderIcon = styled(AiFillFolderAdd)`
  font-size: 4rem;
  color: rgb(95, 99, 104);
  border: none;
  border-bottom: 1px solid rgb(115, 115, 115);
  padding: 0.5rem 0.5rem;
  transition: 0.2s ease-in all;
`;

export const Background = styled.div`
  width: 80%;
  height: 80%;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 40rem;
  height: 20rem;
  background: rgba(54, 69, 79, 0.95);
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
`;

export const ModalInput = styled.input`
  background-color: #bcd4e6;
  border: none;
  height: 2.5rem;
  padding: 2rem 2rem;
  width: 75%;
  margin-top: 3rem;
  outline: none;
  font-size: 1.6rem;
  border-radius: 10px;
  color: whitesmoke;
  letter-spacing: inherit;

  &::placeholder {
    color: whitesmoke;
    font-size: 1.4rem;
    letter-spacing: inherit;
  }

  &:focus {
    background-color: rgba(54, 69, 79, 0.7);
  }
`;

export const ModalButton = styled.button`
  color: #bcd4e6;
  margin-top: 3rem;
  padding: 1rem 2rem;
  background-color: rgba(54, 69, 79);
  border: none;
  font-size: 2rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.1s ease all;
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
