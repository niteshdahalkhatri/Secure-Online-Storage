import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(83, 104, 120, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 50rem;
  height: 30rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgba(119, 136, 153, 0.6);
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 70%;
`;

export const ModalInput = styled.input`
  background-color: blanchedalmond;
  border: none;
  border-bottom: 0.2rem solid black;
  height: 2.5rem;
  padding: 2rem 2rem;
  width: 100%;
  margin-top: 2rem;
  outline: none;
  font-size: 1.8rem;

  &:focus {
    border: none;
    border-bottom: 0.2rem solid black;
  }
`;

export const ModalLabel = styled.label`
  margin-bottom: -1.5rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  color: whitesmoke;
  font-weight: 400;
`;

export const ModalButton = styled.button`
  margin-top: 5rem;
  padding: 1rem 3rem;
  background-color: chartreuse;
  border: none;
  font-size: 1.8rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: 0.2s ease all;
  &:hover {
    transform: translateY(-0.3rem);
  }
`;
