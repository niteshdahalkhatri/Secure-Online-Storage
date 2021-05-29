import styled from "@emotion/styled";
const media = {
  FooterContainerRes: "@media(max-width:650px)",
};
export const FooterContainer = styled.footer`
  background-color: violet;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.span`
  margin-left: -25rem;

  ${media.FooterContainerRes} {
    margin-left: -10rem;
  }
`;
