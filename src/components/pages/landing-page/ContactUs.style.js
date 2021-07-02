import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ContactBackground = styled.section`
  /* background: rgba(204, 204, 255); */
  background: rgba(12, 17, 23);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

export const Logo = styled(Link)`
  color: rgb(231, 230, 221);
  font-size: 8rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  margin-top: -11rem;
  margin-bottom: 2rem;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  font-size: 1.2rem;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  padding: 0.8rem 1rem;
  background: inherit;
  margin-bottom: 2rem;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1.6rem;
  width: 30rem;
  transition: 0.2s ease-in all;
  letter-spacing: inherit;
  color: white;
  &::placeholder {
    color: grey;
    font-size: 1.2rem;
    letter-spacing: inherit;
  }
`;
export const MessageTextarea = styled.textarea`
  width: 30rem;
  height: 10rem;
  margin-left: 1rem;
  background: inherit;
  margin-bottom: 2rem;
  margin-top: 1rem;
  letter-spacing: inherit;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
`;

const sameButtonCss = {
  padding: "0.7rem 2rem",
  fontSize: "1.8rem",
  border: "none",
  background: "inherit",
  fontStyle: "inherit",
  fontWeight: "300",
};

export const SubmitButton = styled.button`
  ${sameButtonCss}
  border: 1px solid white;
  color: white;
  margin-top: 1rem;
  transition: 0.2s ease all;
  letter-spacing: inherit;
  cursor: pointer;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;
