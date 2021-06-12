import React, { useRef, useState } from "react";
import * as s from "./styles/DecryptionModal.style";
import { useSpring, animated } from "react-spring";
import { getKey } from "../pages/storage/encryption/encryptionFunction";

function AskKey({ showAskKey, setShowAskKey, handleAskDelete, userKey }) {
  const KeymodalRef = useRef();
  const [keyCheck, setKeyCheck] = useState("");
  const [keyErrMsg, setKeyErrMsg] = useState("");
  const [disabler, setDisabler] = useState(false);

  const Decanimation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showAskKey ? 1 : 0,
    transform: showAskKey ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeDecModal = (e) => {
    if (KeymodalRef.current === e.target) {
      setShowAskKey(false);
    }
  };

  const handleKey = async () => {
    setDisabler(true);
    const ekey = await getKey(keyCheck);
    if (keyCheck === "") {
      setKeyErrMsg("Your Key is Empty");
      setDisabler(false);
      setTimeout(() => {
        setKeyErrMsg("");
      }, 1500);
      return;
    }

    if (ekey !== userKey) {
      setKeyErrMsg("Your Key do not match!");
      setDisabler(false);
      setTimeout(() => {
        setKeyErrMsg("");
      }, 1500);
      return;
    }
    handleAskDelete();
  };
  return (
    <>
      {showAskKey ? (
        <s.DecBackground onClick={closeDecModal} ref={KeymodalRef}>
          <animated.div style={Decanimation}>
            <s.DecModalWrapper>
              <s.DecModalInput
                type="text"
                autoFocus
                placeholder="Your Key Here"
                id="decryptKey"
                required
                minLength="8"
                error={keyErrMsg}
                value={keyErrMsg ? keyErrMsg : keyCheck}
                onChange={(e) => setKeyCheck(e.target.value)}
              />
              <s.DecButtonContainer>
                <s.ModalDecButton
                  onClick={handleKey}
                  disabled={disabler}
                  type="button"
                >
                  Delete
                </s.ModalDecButton>
              </s.DecButtonContainer>

              <s.DecCloseModalButton
                aria-label="Close modal"
                onClick={() => setShowAskKey((prev) => !prev)}
              />
            </s.DecModalWrapper>
          </animated.div>
        </s.DecBackground>
      ) : null}
    </>
  );
}

export default AskKey;
