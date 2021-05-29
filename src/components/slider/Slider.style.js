import styled from "@emotion/styled";
import { FiFile } from "react-icons/fi";

export const SliderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -2.5rem;
  margin-bottom: 1.5rem;
  height: 30%;
`;

export const TextContainer = styled.div`
  margin-bottom: 2.5rem;
  align-self: flex-start;
  margin-left: 19rem;

  p {
    font-size: 1.8rem;
    font-family: inherit;
  }
`;

export const IconContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid burlywood;
  width: 50%;
  padding: 1.5rem;
  cursor: pointer;
  transition: 0.2s ease-in all;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const FileIcon = styled(FiFile)`
  font-size: 4rem;
`;
