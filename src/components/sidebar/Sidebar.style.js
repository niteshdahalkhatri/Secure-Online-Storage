import styled from "@emotion/styled";

const media = {
  sidebarDisplay: "@media(max-width:900px)",
  sidebarHeight: "@media(max-height:540px)",
};

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isSidebarOpen ? "20%" : "5%")};
  min-width: 8rem;
  max-width: 28rem;
  background-image: linear-gradient(
      315deg,
      rgba(0, 123, 167, 0.8) 0%,
      rgba(54, 69, 79, 0.8) 70%
    ),
    url("/images/enc.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: whitesmoke;
  position: relative; //toggler
  transition: 0.2s ease all;
  /* overflow-x: hidden;
  overflow-y: scroll; */

  /* custom scrollbar */
  /* &::-webkit-scrollbar {
    width: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 2rem;
    border: 0.6rem solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  } */
`;

export const LogoContainer = styled.h3`
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.6rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const MenuItemContainer = styled.div``;
export const MenuItem = styled.div`
  ${(props) => !props.isSidebarOpen && `text-align:center; `}
  ${(props) =>
    !props.isSidebarOpen &&
    props.selected &&
    `background-color:rgb(0,0,0,0.6);`}
    white-space: nowrap;
  padding: 0.6rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => (props.selected ? "rgb(255,255,255)" : "#ace1af")};
  cursor: pointer;

  &:hover {
    color: white;
    transition: 0.1s ease-in all;
  }

  &:after {
    content: "";
    border-top: 0.2rem solid
      ${(props) => (props.selected ? "rgb(153,102,204)" : "rgb(93,138,168)")};
    display: block;
    margin: 1rem 0 0.6rem;
  }

  ${(props) =>
    !props.selected &&
    `&:hover{
      &:after{
        border-top: 0.2rem solid rgba(255,255,255,0.2);
        transition: 0.1s ease-in all;
      }
  }`}
`;

export const Text = styled.p`
  display: ${(props) => (props.isSidebarOpen ? "inline" : "none")};
`;

export const Icons = styled.i`
  height: 1.6rem;
  width: 1.6rem;
  ${(props) => props.isSidebarOpen && `padding-right: 2rem;`}
  color: ${(props) => (props.selected ? "#9966cc" : "#6e7f80")};
  transition: 0.2s ease-in all;
`;

//toggler
export const TogglerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10%;
  width: 30%;
  ${media.sidebarDisplay} {
    display: none;
  }
  ${media.sidebarHeight} {
    display: none;
  }
`;

export const Toggler = styled.div`
  height: 4rem;
  cursor: pointer;
  position: relative; //::after

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.2em;
    width: 100%;
    background: white;
    box-shadow: 0 0.75em 0 0 white, 0 1.5em 0 0 white;
  }
`;
