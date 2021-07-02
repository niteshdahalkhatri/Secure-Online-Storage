import styled, { css, keyframes } from "styled-components";
import { MdClose } from "react-icons/md";

const SlideLeft = keyframes`
  0% {
    margin-left: 120%;
        opacity: 0;
    }

    25%{
      opacity: 0.2;
    }

    40%{
      opacity: 0.4;
    }

  50%{
  opacity: 0.5;
  }
  70%{
    opacity: 0.8;
  }
    100% {
      margin-left: 0%;
        opacity: 1;
    }
`;

const SlideRight = keyframes`
    0% {
      margin-left: 0%;
        opacity: 1;
    }

    25%{
      opacity: 0.8;
    }

    40%{
      opacity: 0.5;
    }
  50%{
  opacity: 0.4;
  }
  70%{
    opacity: 0.2;
  }
    100% {
      margin-left:120%;
        opacity: 0;
    }
`;

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 30%;
  right: 10px;
`;

// export const NotificationItem = styled.div`
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   overflow: hidden;
//   margin-bottom: 20px;
//   animation: ${SlideLeft} 0.4s forwards;
//   animation-fill-mode: forwards;
//   width: 30rem;
//   height: 15rem;

//   p {
//     margin: 0;
//     padding: 10px;
//   }
//   &.exit {
//     animation: ${SlideRight} 0.4s;
//     animation-fill-mode: forwards;
//   }

//   &.bar {
//     height: 10px;
//   }

//   &.success.bar {
//     background-color: #65d266;
//   }

//   &.error.bar {
//     background-color: red;
//   }
// `;

export const ModalWrapper = styled.div`
  width: 30rem;
  height: 8rem;
  background: rgba(54, 69, 79, 0.95);
  color: white;
  ${(props) =>
    props.showNotification
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  font-size: 1.4rem;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-bottom: 4px solid green;
  z-index: 10;
  ${(props) =>
    props.showNotification
      ? css`
          animation: ${SlideLeft} 0.4s forwards;
        `
      : css`
          animation: ${SlideRight} 0.4s forwards;
        `}
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  /* position: absolute;
  top: 10px;
  right: 10px; */
  width: 32px;
  height: 32px;
  /* padding: 0; */
  z-index: 10;
  transition: 0.2s ease all;
  color: black;
  margin-right: 0.5rem;
  margin-top: -1.75rem;

  &:hover {
    transform: translateY(-0.1rem);
  }
`;
