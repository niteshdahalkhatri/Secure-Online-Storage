import styled from "@emotion/styled";
//hero section
export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  max-height: 110rem;
  overflow: hidden;
`;

export const HeroImage = styled.div`
  background-image: linear-gradient(
      315deg,
      rgba(0, 123, 167, 0.8) 0%,
      rgba(54, 69, 79, 0.8) 70%
    ),
    url("images/enc.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroTitle = styled.div`
  margin-bottom: 1rem;
  h1 {
    font-size: 5rem;
    font-family: inherit;
    font-weight: 400;
    color: #ff7f50;
  }
`;
export const HeroContent = styled.div`
  p {
    font-size: 2.5rem;
    font-family: inherit;
    font-weight: 300;
    color: #ff7f50;
  }
`;
