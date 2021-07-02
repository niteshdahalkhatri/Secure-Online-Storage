import React from "react";
import * as s from "./styles/Notification.style";

function Notification({ message, showNotification, setShowNotification }) {
  // setTimeout(() => {
  //   setShowModal(false);
  // }, 2500);

  return (
    <>
      {showNotification && (
        <s.NotificationWrapper
          onMouseEnter={() => setShowNotification((prev) => !prev)}
        >
          <s.ModalWrapper showNotification={showNotification}>
            <p style={{ marginLeft: "0.5rem" }}>{message}</p>
            <s.CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowNotification((prev) => !prev)}
              message={message}
            />
          </s.ModalWrapper>
        </s.NotificationWrapper>
      )}
    </>
  );
}

export default Notification;
