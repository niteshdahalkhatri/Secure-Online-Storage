import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import * as s from "./styles/FileDropDown.style";
import { BsDownload } from "react-icons/bs";
import { AiOutlineShareAlt, AiFillDelete } from "react-icons/ai";
import { IoPersonRemoveSharp } from "react-icons/io5";
import DecryptionModal from "../modal/DecryptionModal";
import ShareModal from "../modal/ShareModal";
import UnShareModal from "../modal/UnShareModal";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase";

function FileDropDown({ openFileDropdown, setOpenFileDropdown, file }) {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShareModal] = useState(false);
  const [showUnShareModal, setUnShareModal] = useState(false);
  const { currentUser } = useAuth();

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

  //works needs to be done shared by me
  function handleUnshare() {
    setOpenFileDropdown((prev) => !prev);
    setUnShareModal((prev) => !prev);
  }

  function handleDelete() {
    database.files.doc(file.id).update({
      moveToBin: true,
    });
    setOpenFileDropdown((prev) => !prev);
  }

  //share with me Remove
  function handleRemove() {
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

              {file.sharedBy === currentUser.uid && (
                <s.FileModalContent onClick={handleUnshare}>
                  <IoPersonRemoveSharp style={{ marginRight: "0.3rem" }} />
                  <p style={{ textDecoration: "line-through" }}>Share</p>
                </s.FileModalContent>
              )}
              {file.sharedBy === currentUser.uid && <s.HR />}
              {file.ownedBy === currentUser.uid && (
                <s.FileModalContent onClick={handleShare}>
                  <AiOutlineShareAlt style={{ marginRight: "0.3rem" }} />
                  <p>Share</p>
                </s.FileModalContent>
              )}

              {file.ownedBy === currentUser.uid && <s.HR />}
              {file.ownedBy === currentUser.uid ? (
                <s.FileModalContent onClick={handleDelete}>
                  <AiFillDelete style={{ marginRight: "0.3rem" }} />
                  <p>Delete</p>
                </s.FileModalContent>
              ) : (
                <s.FileModalContent onClick={handleRemove}>
                  <AiFillDelete style={{ marginRight: "0.3rem" }} />
                  <p>Remove</p>
                </s.FileModalContent>
              )}
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
      <UnShareModal
        showUnShareModal={showUnShareModal}
        setUnShareModal={setUnShareModal}
        file={file}
      />
    </>
  );
}

export default FileDropDown;
