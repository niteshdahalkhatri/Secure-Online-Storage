import styled from "@emotion/styled";

export const MessageDisplay = styled.p`
  color: #008000;
  font-size: 1.5rem;
  justify-self: center;
  border-bottom: 1px solid green;
  height: 3rem;
  margin-top: 0.5rem;
  transition: 0.2s ease-in all;
`;

export const ModalWrapper = styled.div`
  width: 45rem;
  height: 30rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgba(27, 27, 34, 0.6);
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
  line-height: 1.5;
  margin-top: -5rem;
`;

export const ModalInput = styled.input`
  background-color: rgba(54, 69, 79);
  border: none;
  height: 2.5rem;
  padding: 2rem 2rem;
  width: 100%;
  outline: none;
  font-size: 1.8rem;
  border-radius: 10px;
  color: whitesmoke;

  &:focus {
    background-color: rgba(54, 69, 79);
  }
`;

export const ModalLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: rgb(231, 230, 221);
  font-weight: 400;
`;
