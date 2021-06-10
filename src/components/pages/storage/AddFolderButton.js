import React, { useRef, useState } from "react";
import * as s from "./styles/AddFolderButton.style";
import { useSpring, animated } from "react-spring";
import { database } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { ROOT_FOLDER } from "../../../hooks/useFolder";

function AddFolderButton({ currentFolder }) {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentFolder == null) return;

    if (name.length > 16) {
      return (
        setName("Name should be less than 16 words"),
        setTimeout(() => {
          setName("");
        }, 2000)
      );
    }

    const path = [...currentFolder.path];
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id });
    }

    //create a folder in the database
    database.folders.add({
      name,
      ownedBy: currentUser.uid,
      parentId: currentFolder.id,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    });
    setName("");
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <s.AddFolderBtn>
        <s.AddFolderIcon onClick={openModal} />
      </s.AddFolderBtn>
      {showModal ? (
        <s.Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <s.ModalWrapper showModal={showModal}>
              <s.ModalContent onSubmit={handleSubmit}>
                <s.ModalInput
                  type="text"
                  autoFocus
                  placeholder="Folder Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <s.ModalButton type="submit">Add Folder</s.ModalButton>
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

export default AddFolderButton;
