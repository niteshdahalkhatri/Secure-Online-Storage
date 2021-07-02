import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const Nav = styled.nav`
  height: 6rem;
  /* background-color: rgba(93, 138, 168, 0.7); */
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
    display: ${(props) => (props.showMenu ? "none" : "block")};
    color: white;
    font-size: 2rem;
    cursor: pointer;
    height: 3rem;
    width: 4rem;
  }
`;

export const mobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 798px) {
    display: ${(props) => (props.showMenu ? "block" : "none")};
    background: linear-gradient(
      315deg,
      rgba(0, 123, 167, 0.9) 0%,
      rgba(54, 69, 79, 0.9) 70%
    );
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1000;
  }
`;

export const mobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  margin-top: 20rem;
`;
export const CloseMenuButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
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
