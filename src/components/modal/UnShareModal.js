import React, { useRef, useState } from "react";
import * as s from "./styles/ShareModal.style";
import { useSpring, animated } from "react-spring";
import { useFolder } from "../../hooks/useFolder";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

function UnShareModal({ showUnShareModal, setUnShareModal, file }) {
  const UnSharemodalRef = useRef();
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { users } = useFolder();
  const { currentUser } = useAuth();

  const UnShareanimation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showUnShareModal ? 1 : 0,
    transform: showUnShareModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeDecModal = (e) => {
    if (UnSharemodalRef.current === e.target) {
      setUnShareModal(false);
    }
  };

  function handleRemove(e) {
    e.preventDefault();
    const prevValue = file.sharedTo;
    const sharedToEmails = file.sharedEmails;
    const user = users.find((user) => user.email === email);
    const checkEmail = file.sharedEmails.includes(email);
    const newValue = prevValue.filter((share) => share.email !== email);
    const newEmails = sharedToEmails.filter(
      (shareToEmail) => shareToEmail !== email
    );

    if (!checkEmail) {
      setErrMsg("Not shared to this user!");
      setTimeout(() => {
        setErrMsg("");
        setEmail("");
      }, 2000);
      return;
    }

    if (user === undefined) {
      setErrMsg("Email does not match!");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      return;
    }

    if (email === currentUser.email) {
      setErrMsg("Error Your mail detected!");
      setTimeout(() => {
        setErrMsg("");
        setEmail("");
      }, 2000);
      return;
    }

    if (newValue.length === 0 && newEmails.length === 0) {
      database.files.doc(file.id).update({
        sharedTo: newValue,
        sharedBy: "",
        sharedEmails: newEmails,
      });
    } else {
      database.files.doc(file.id).update({
        sharedTo: newValue,
        sharedBy: currentUser.uid,
        sharedEmails: newEmails,
      });
    }

    setEmail("");
    setUnShareModal((prev) => !prev);
  }
  return (
    <>
      {showUnShareModal ? (
        <s.Background onClick={closeDecModal} ref={UnSharemodalRef}>
          <animated.div style={UnShareanimation}>
            <s.ModalWrapper showModal={showUnShareModal}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  alignItems: "center",
                }}
                onSubmit={handleRemove}
              >
                <s.ModalInput
                  type="email"
                  autoFocus
                  placeholder="Email to remove from shared files"
                  required
                  error={errMsg}
                  value={errMsg ? errMsg : email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <s.ButtonContainer>
                  <s.ModalShareButton onClick={handleRemove} type="submit">
                    Remove
                  </s.ModalShareButton>
                </s.ButtonContainer>
              </form>

              <s.CloseModalButton
                aria-label="Close modal"
                onClick={() => setUnShareModal((prev) => !prev)}
              />
            </s.ModalWrapper>
          </animated.div>
        </s.Background>
      ) : null}
    </>
  );
}

export default UnShareModal;
