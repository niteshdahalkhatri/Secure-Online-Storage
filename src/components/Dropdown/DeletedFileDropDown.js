import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import * as s from "./styles/DeletedFile.style";
import { AiFillDelete } from "react-icons/ai";
import { IoIosRemoveCircle } from "react-icons/io";
import { useAuth } from "../../contexts/AuthContext";
import { database, storage } from "../../firebase";
import { useNotification } from "../../contexts/NotificationProvider";

function DeletedFileDropDown({
  openDeleteFile,
  setOpenDeleteFileDropdown,
  file,
}) {
  const DeleteModalRef = useRef();
  const { currentUser } = useAuth();
  const { setMessage, setShowNotification } = useNotification();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: openDeleteFile ? 1 : 0,
    transform: openDeleteFile ? `translateY(0rem)` : `translateY(-5rem)`,
  });

  const closeModal = (e) => {
    if (DeleteModalRef.current === e.target) {
      setOpenDeleteFileDropdown(false);
    }
  };

  function handleRemove() {
    database.files.doc(file.id).update({
      moveToBin: false,
    });
    setMessage(`${file.name} removed From Bin`);
    setShowNotification(true);
    setOpenDeleteFileDropdown((prev) => !prev);
  }

  function handleDelete() {
    const DeleteTask = storage
      .ref(`files/${currentUser.uid}${file.path}`)
      .delete();
    DeleteTask.then((c) => {}).catch((e) => {
      console.log(e);
    });
    database.files.doc(file.id).delete();
    setMessage(`${file.name} deleted`);
    setShowNotification(true);
    setOpenDeleteFileDropdown((prev) => !prev);
  }
  return (
    <>
      {openDeleteFile ? (
        <s.FileBackground onClick={closeModal} ref={DeleteModalRef}>
          <animated.div style={animation}>
            <s.FileModalWrapper showModal={openDeleteFile}>
              <s.FileModalContent onClick={handleDelete}>
                <AiFillDelete style={{ marginRight: "0.3rem" }} />
                <p>Delete</p>
              </s.FileModalContent>
              <s.HR />
              <s.FileModalContent onClick={handleRemove}>
                <IoIosRemoveCircle style={{ marginRight: "0.3rem" }} />
                <p>Restore</p>
              </s.FileModalContent>
              <s.HR />
            </s.FileModalWrapper>
          </animated.div>
        </s.FileBackground>
      ) : null}
    </>
  );
}

export default DeletedFileDropDown;
