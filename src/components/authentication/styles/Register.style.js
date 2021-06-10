import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  color: rgb(231, 230, 221);
  font-size: 8rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  margin-top: -8rem;
`;

export const RegisterModalWrapper = styled.div`
  width: 45rem;
  height: 40rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgba(27, 27, 34, 0.6);
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const RegisterModalButton = styled.button`
  color: rgb(231, 230, 221);
  margin-top: 3rem;
  padding: 1rem 3rem;
  background-color: #238636;
  border: none;
  font-size: 2rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.1s ease all;
  border-radius: 5px;
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
