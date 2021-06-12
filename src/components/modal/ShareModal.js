import React, { useRef, useState } from "react";
import * as s from "./styles/ShareModal.style";
import { useSpring, animated } from "react-spring";
import { useFolder } from "../../hooks/useFolder";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
// import { sendMail } from "../functions/sendMails";

function ShareModal({ showShareModal, setShareModal, file }) {
  const SharemodalRef = useRef();
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { users } = useFolder();
  const { currentUser } = useAuth();

  const Shareanimation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showShareModal ? 1 : 0,
    transform: showShareModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeDecModal = (e) => {
    if (SharemodalRef.current === e.target) {
      setShareModal(false);
    }
  };

  function handleShare(e) {
    e.preventDefault();
    const prevValue = file.sharedTo;
    const sharedToEmails = file.sharedEmails;
    const user = users.find((user) => user.email === email);
    const alreadyEmail = prevValue.find((share) => share.email === email);

    if (alreadyEmail !== undefined) {
      setErrMsg("Already Shared to this user!");
      setTimeout(() => {
        setErrMsg("");
      }, 900);
      return;
    }

    if (user === undefined) {
      setErrMsg("Email does not match!");
      setTimeout(() => {
        setErrMsg("");
      }, 900);
      return;
    }

    if (email === currentUser.email) {
      setErrMsg("Error Your mail detected!");
      setTimeout(() => {
        setErrMsg("");
      }, 900);
      return;
    }

    sharedToEmails.push(user.email);
    prevValue.push(user);

    // sendMail(
    //   email,
    //   `${file.name} was shared to you.`,
    //   `${currentUser.email} shared the file (${file.name}) to you,
    //     You can contact this user for the key of this file. ${
    //       file.encrypted && "Keep in mind that the file is encrypted"
    //     }`,
    //   '<a href="http://localhost:3000/dashboard/shared-with-me">http://localhost:3000/dashboard/shared-with-me</a>'
    // );
    database.files.doc(file.id).update({
      sharedTo: prevValue,
      sharedBy: currentUser.uid,
      sharedEmails: sharedToEmails,
    });
    setEmail("");
    setShareModal((prev) => !prev);
  }
  return (
    <>
      {showShareModal ? (
        <s.Background onClick={closeDecModal} ref={SharemodalRef}>
          <animated.div style={Shareanimation}>
            <s.ModalWrapper showModal={showShareModal}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  alignItems: "center",
                }}
                onSubmit={handleShare}
              >
                <s.ModalInput
                  type="email"
                  autoFocus
                  placeholder="Email to share files"
                  required
                  error={errMsg}
                  value={errMsg ? errMsg : email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <s.ButtonContainer>
                  <s.ModalShareButton onClick={handleShare} type="submit">
                    Share
                  </s.ModalShareButton>
                </s.ButtonContainer>
              </form>

              <s.CloseModalButton
                aria-label="Close modal"
                onClick={() => setShareModal((prev) => !prev)}
              />
            </s.ModalWrapper>
          </animated.div>
        </s.Background>
      ) : null}
    </>
  );
}

export default ShareModal;
