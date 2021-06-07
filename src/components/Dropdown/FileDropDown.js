import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import * as s from "./styles/FileDropDown.style";
import { BsDownload } from "react-icons/bs";
import { AiOutlineShareAlt, AiFillDelete } from "react-icons/ai";
import DecryptionModal from "../modal/DecryptionModal";
import ShareModal from "../modal/ShareModal";

function FileDropDown({ openFileDropdown, setOpenFileDropdown, file }) {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShareModal] = useState(false);

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: openFileDropdown ? 1 : 0,
    transform: openFileDropdown ? `translateY(0rem)` : `translateY(-5rem)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenFileDropdown(false);
    }
  };

  function handleDecryption() {
    setOpenFileDropdown((prev) => !prev);
    setShowModal((prev) => !prev);
  }

  function handleShare() {
    setOpenFileDropdown((prev) => !prev);
    setShareModal((prev) => !prev);
  }
  return (
    <>
      {openFileDropdown ? (
        <s.FileBackground onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <s.FileModalWrapper showModal={openFileDropdown}>
              {file.encrypted ? (
                <s.FileModalDecContent onClick={handleDecryption}>
                  <BsDownload style={{ marginRight: "0.3rem" }} />
                  Download
                </s.FileModalDecContent>
              ) : (
                <s.FileModalContent
                  onClick={() => setOpenFileDropdown((prev) => !prev)}
                  href={file.url}
                  download={file.name}
                  target="blank"
                >
                  <BsDownload style={{ marginRight: "0.3rem" }} />
                  Download
                </s.FileModalContent>
              )}
              <s.HR />
              <s.FileModalContent onClick={handleShare}>
                <AiOutlineShareAlt style={{ marginRight: "0.3rem" }} />
                <p>Share</p>
              </s.FileModalContent>
              <s.HR />
              <s.FileModalContent
                onClick={() => setOpenFileDropdown((prev) => !prev)}
              >
                <AiFillDelete style={{ marginRight: "0.3rem" }} />
                <p>Delete</p>
              </s.FileModalContent>
            </s.FileModalWrapper>
          </animated.div>
        </s.FileBackground>
      ) : null}
      <DecryptionModal
        showModal={showModal}
        setShowModal={setShowModal}
        userKey={file.key}
        file={file}
      />
      <ShareModal
        showShareModal={showShareModal}
        setShareModal={setShareModal}
        file={file}
      />
    </>
  );
}

export default FileDropDown;
