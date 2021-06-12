import styled from "@emotion/styled";

export const media = {
  userContainerRes: "@media(max-width:1260px)",
  userDisplayRes: ["@media(max-width:848px)", "@media(max-width:570px)"],
};

export const HeaderContainer = styled.header`
  display: flex;
  background-color: #36454f;
  /* background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);s*/
  height: 5rem;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const UserContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.userContainerRes} {
    margin-right: 5.7rem;
  }
  ${media.userDisplayRes[1]} {
    margin-right: 8rem;
  }
`;

export const UserDisplay = styled.span`
  max-width: 20rem;
  background-color: #36454f;
  border: none;
  border-bottom: 1px solid #9966cc;
  height: 2.5rem;
  padding: 2rem 0 2rem 2rem;
  padding-right: 3.25rem;
  display: flex;
  align-items: center;
  ${media.userDisplayRes[0]} {
    max-width: 15rem;
  }
  ${media.userDisplayRes[1]} {
    max-width: 12rem;
  }
`;

export const User = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: whitesmoke;
  ${media.userDisplayRes[0]} {
    font-size: 1.5rem;
  }
`;

export const UserIconContainer = styled.button`
  border: none;
  background-color: transparent;
  z-index: 1;
  margin-top: 0.6rem;
  margin-left: -3.25rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(0.2rem);
  }
`;
