import React, { useRef, useState } from "react";
import * as s from "./styles/DecryptionModal.style";
import { useSpring, animated } from "react-spring";
import {
  getKey,
  decryptFiles,
} from "../pages/storage/encryption/encryptionFunction";

function DecryptionModal({ showModal, setShowModal, userKey, file }) {
  const DecmodalRef = useRef();
  const [key, setKey] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [url, setUrl] = useState("");
  const [disabler, setDisabler] = useState(false);

  const Decanimation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeDecModal = (e) => {
    if (DecmodalRef.current === e.target) {
      setShowModal(false);
    }
  };

  async function handleDecrypt() {
    if (key === "") {
      setErrMsg("Your Key is Empty");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      return;
    }
    const ekey = await getKey(key);
    if (ekey !== userKey) {
      setErrMsg("Your Key do not match!");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      return;
    }
    const eFile = file.encFile;
    await decryptFiles(ekey, eFile, setUrl, setDisabler);
  }
  return (
    <>
      {showModal ? (
        <s.DecBackground onClick={closeDecModal} ref={DecmodalRef}>
          <animated.div style={Decanimation}>
            <s.DecModalWrapper showModal={showModal}>
              <s.DecModalInput
                type="text"
                autoFocus
                placeholder="Your Key Here"
                required
                error={errMsg}
                value={errMsg ? errMsg : key}
                onChange={(e) => setKey(e.target.value)}
              />
              <s.DecButtonContainer>
                <s.ModalDecButton onClick={handleDecrypt} disabled={disabler}>
                  Decrypt
                </s.ModalDecButton>
                <s.DecModalButton
                  disabled={!disabler}
                  href={url}
                  download={file.name}
                >
                  Download
                </s.DecModalButton>
              </s.DecButtonContainer>

              <s.DecCloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </s.DecModalWrapper>
          </animated.div>
        </s.DecBackground>
      ) : null}
    </>
  );
}

export default DecryptionModal;
