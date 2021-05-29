import styled from "@emotion/styled";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

export const Dropdown = styled.div`
  position: absolute;
  top: 4.7rem;
  width: 20rem;
  border: none;
  padding: 1.5rem;
  background-color: thistle;
  border-radius: 10px;
  margin-left: 0.2rem;
  z-index: 10000;
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
  &:hover {
    background-color: tomato;
    border-radius: 5px;
  }

  p {
    padding-left: 1rem;
  }
`;
