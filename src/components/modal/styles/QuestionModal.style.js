import styled from "@emotion/styled";

export const QuestionModalWrapper = styled.div`
  width: 45rem;
  height: 20rem;
  background: rgba(54, 69, 79, 0.95);
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 1000;
  border-radius: 10px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4rem;
  margin-top: 4rem;
  color: whitesmoke;
  font-size: 1.6rem;
  width: 80%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -4rem;
`;
