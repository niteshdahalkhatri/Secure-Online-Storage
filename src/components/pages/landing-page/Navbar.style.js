import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 6rem;
  /* background-color: grey; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled(Link)`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;
`;

export const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 798px) {
    display: block;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    height: 3rem;
    width: 4rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -4.8rem;

  @media screen and (max-width: 798px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  color: white;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.4rem;
  @media screen and (max-width: 798px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  background: #cd853f;
  white-space: nowrap;
  outline: none;
  text-decoration: none;
  border: none;
  min-width: 10rem;
  max-width: 20rem;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;

  &:hover {
    transform: translateY(-2px);
  }
`;
