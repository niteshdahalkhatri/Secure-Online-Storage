import styled from "@emotion/styled";
import { RiShieldUserLine } from "react-icons/ri";

export const ProfileBackground = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* overflow-y: scroll; */
`;

export const Logo = styled(RiShieldUserLine)`
  /* color: rgb(231, 230, 221); */
  font-size: 17rem;
  cursor: pointer;
  font-weight: 300;
`;

export const LogoText = styled.p`
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 300;
  margin: 1rem 0;
  color: #5d8aa8;
  font-weight: bold;
`;

// export const ModalWrapper = styled.div`
//   width: 45rem;
//   height: 35rem;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: rgba(27, 27, 34, 0.6);
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.8;
  width: 30%;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  width: 100%;
`;

export const ModalInput = styled.input`
  background-color: rgba(93, 138, 168);
  border: none;
  height: 2.5rem;
  padding: 2rem 2rem;
  margin-top: 2rem;
  outline: none;
  font-size: 1.5rem;
  border-radius: 10px;
  color: whitesmoke;
  transition: 0.3s ease-in all;

  &::placeholder {
    color: whitesmoke;
  }
  &:focus {
    background-color: rgba(54, 69, 79);
  }
`;

export const ModalLabel = styled.label`
  margin-bottom: -1.5rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  color: #5d8aa8;
  font-weight: 400;
`;

export const ModalButton = styled.button`
  color: rgb(231, 230, 221);
  margin-top: 5rem;
  padding: 1rem 3rem;
  background: #cd853f;
  border: none;
  font-size: 2rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.1s ease all;
  border-radius: 10px;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: 0.2rem 0rem 2rem rgba(0, 0, 0, 0.3);
  }
`;

// export const BottomWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   width: 45rem;
//   font-size: 1.6rem;
//   margin-top: 2rem;
//   border: 1px solid #495059;
//   border-radius: 10px;
//   padding: 2rem;

//   p {
//     color: whitesmoke;
//   }
// `;

export const ErrorDisplay = styled.p`
  color: #ff0040;
  font-size: 1.5rem;
  justify-self: center;
  border-bottom: 1px solid red;
  height: 3rem;
  margin-top: 0.5rem;
  transition: 0.2s ease-in all;
`;
