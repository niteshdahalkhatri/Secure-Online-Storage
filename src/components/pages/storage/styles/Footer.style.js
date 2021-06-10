import styled from "@emotion/styled";
const media = {
  FooterContainerRes: "@media(max-width:650px)",
};
export const FooterContainer = styled.footer`
  /* rgb(4, 210, 145) */

  background-color: #36454f;
  /* background-image: linear-gradient(147deg, #000000 0%, #434343 74%); */
  /* linear-gradient(0deg,  0%,  74%); */

  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const FooterContent = styled.span`
  color: whitesmoke;
  font-size: 1.6rem;

  ${media.FooterContainerRes} {
    font-size: 1.4rem;
  }
`;
