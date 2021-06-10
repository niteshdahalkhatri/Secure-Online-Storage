import styled from "@emotion/styled";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { media } from "../../pages/storage/styles/Header.style";

export const Dropdown = styled.div`
  position: absolute;
  top: 4.7rem;
  max-width: 22rem;
  border: none;
  padding: 1.5rem;
  border: 1px solid #9966cc;
  background-color: rgba(54, 69, 79, 0.7);
  margin-left: 0.2rem;
  z-index: 10000;
  ${media.userDisplayRes[0]} {
    max-width: 19rem;
  }
  ${media.userDisplayRes[1]} {
    max-width: 17rem;
  }
`;

export const profileIcon = styled(AiFillSetting)`
  font-size: 2rem;
  margin-left: 0.5rem;
`;
export const logoutIcon = styled(BiLogOutCircle)`
  font-size: 2rem;
  margin-left: 0.5rem;
`;

export const DropdownItem = styled.span`
  height: 5rem;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  cursor: pointer;
  color: whitesmoke;
  text-decoration: none;
  &:hover {
    background-color: rgba(153, 102, 204, 0.4);
    width: 100%;
    text-decoration: none;
    color: whitesmoke;
  }

  p {
    padding-left: 1rem;
    margin-bottom: 0;
  }
`;
