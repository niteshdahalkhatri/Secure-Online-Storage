import React, { useRef } from "react";
import * as s from "./styles/LoginModal.styles";
import { useSpring, animated } from "react-spring";

function Login({ showModal, setShowModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <>
      {showModal ? (
        <s.Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <s.ModalWrapper showModal={showModal}>
              <s.ModalContent>
                <s.ModalForm>
                  <s.ModalLabel htmlFor="email">Email Address</s.ModalLabel>
                  <s.ModalInput
                    type="email"
                    autoFocus
                    placeholder="Email address"
                    name="email"
                    id="email"
                  />

                  <s.ModalLabel htmlFor="password">Password</s.ModalLabel>
                  <s.ModalInput
                    type="password"
                    autoFocus
                    placeholder="Password"
                    name="password"
                    id="password"
                  />
                  <s.ModalButton type="submit">Add Folder</s.ModalButton>
                </s.ModalForm>
              </s.ModalContent>
              <s.CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </s.ModalWrapper>
          </animated.div>
        </s.Background>
      ) : null}
    </>
  );
}

export default Login;
