import React, { useRef } from "react";
import * as s from "../pages/storage/styles/AddFolderButton.style";
import * as q from "./styles/QuestionModal.style";
import { useSpring, animated } from "react-spring";

function QuestionModal(props) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: props.showQuestion ? 1 : 0,
    transform: props.showQuestion ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setShowQuestion(false);
    }
  };

  const handleClickYes = () => {
    props.handleMassRemove();
    props.setShowQuestion((prev) => !prev);
  };

  const handleClickNo = () => {
    props.setShowQuestion((prev) => !prev);
  };
  return (
    <>
      {props.showQuestion ? (
        <s.Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <q.QuestionModalWrapper showModal={props.showQuestion}>
              <q.QuestionContainer>
                <span>{props.question}</span>
              </q.QuestionContainer>
              <q.ButtonContainer>
                <s.ModalButton type="button" onClick={handleClickYes}>
                  Yes
                </s.ModalButton>
                <s.ModalButton type="button" onClick={handleClickNo}>
                  No
                </s.ModalButton>
              </q.ButtonContainer>

              <s.CloseModalButton
                aria-label="Close modal"
                onClick={() => props.setShowQuestion((prev) => !prev)}
              />
            </q.QuestionModalWrapper>
          </animated.div>
        </s.Background>
      ) : null}
    </>
  );
}

export default QuestionModal;
