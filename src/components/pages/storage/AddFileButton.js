import React, { useState } from "react";
import * as s from "./styles/AddFileButton.style";
import { useSpring, animated } from "react-spring";
import ReactDOM from "react-dom";
import { v4 as uuidV4 } from "uuid";
import { useAuth } from "../../../contexts/AuthContext";
import { storage, database } from "../../../firebase";
import { ROOT_FOLDER } from "../../../hooks/useFolder";
import { Toast } from "react-bootstrap";
import { encryptFiles } from "./encryption/encryptionFunction";

function AddFileButton({ currentFolder }) {
  const [encrypt, setEncrypt] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const [files, setFiles] = useState("");
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isEncrypting, setIsEncrpting] = useState(false);
  const [type, setType] = useState("");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-90%)`,
  });

  const keyAnimation = useSpring({
    config: {
      duration: 250,
    },
    opacity: encrypt ? 1 : 0,
    transform: encrypt ? `translateY(0%)` : `translateY(-100%)`,
  });

  //file choose

  function handleChoose(e) {
    const file = e.target.files[0];
    setFiles(file);
    if (currentFolder == null || file == null) return;
    setFileName(file.name);
    setType(file.type);
  }

  async function handleEncrypt() {
    if (currentFolder == null || files === "") return;
    if (encrypt === true && key === "") {
      setError("Your key is Empty");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (encrypt === true && key.length < 8) {
      setError("Key should be more than 8 characters");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (encrypt === true) {
      await encryptFiles(
        key,
        setKey,
        files,
        setFiles,
        setEncrypt,
        setIsEncrpting
      );
    }
  }

  //file upload
  function handleUpload() {
    if (currentFolder == null || files === "") return;
    // if (encrypt === true && key === "") {
    //   setError("Your key is Empty");
    //   setTimeout(() => {
    //     setError("");
    //   }, 2000);
    //   return;
    // }

    // if (encrypt === true && key.length < 8) {
    //   setError("Key should be more than 8 characters");
    //   setTimeout(() => {
    //     setError("");
    //   }, 2000);
    //   return;
    // }

    // if (encrypt === true) {
    //   setIsEncrpting(true);
    //   await encryptFiles(key, files, setFiles, setIsEncrpting);
    // }
    // setIsLoading(true);
    const id = uuidV4();
    setUploadingFiles((prevUploadingFiles) => [
      ...prevUploadingFiles,
      { id: id, name: fileName, progress: 0, error: false },
    ]);
    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join("/")}/${fileName}`
        : `${currentFolder.path.join("/")}/${currentFolder.name}/${fileName}`;

    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(files);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress };
            }

            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true };
            }
            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((prevUploadingFiles) => {
          return prevUploadingFiles.filter((uploadFile) => {
            return uploadFile.id !== id;
          });
        });

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.files
            .where("name", "==", fileName)
            .where("ownedBy", "==", currentUser.uid)
            .where("folderId", "==", currentFolder.id)
            .get()
            .then((existingFiles) => {
              const existingFile = existingFiles.docs[0];
              if (existingFile) {
                existingFile.ref.update({ url: url });
                setFileName("");
                setFiles("");
                return;
              } else {
                database.files.add({
                  url: url,
                  name: fileName,
                  createdAt: database.getCurrentTimestamp(),
                  folderId: currentFolder.id,
                  ownedBy: currentUser.uid,
                  encrypted: isEncrypting,
                  key: key,
                  encFile: isEncrypting ? files : "",
                  type: type,
                  sharedBy: "",
                  sharedTo: [],
                  sharedEmails: [],
                  moveToBin: false,
                  path: filePath,
                });
                setFileName("");
                setFiles("");
                setKey(""); // setIsLoading(false);
              }
            });
        });
      }
    );
  }

  return (
    <>
      <s.AddFileBtn>
        <s.AddFileIcon onClick={openModal} />
      </s.AddFileBtn>
      {showModal ? (
        <s.Background>
          <animated.div style={animation}>
            <s.ModalWrapper showModal={showModal}>
              <s.UploadIcon />
              <s.UploadFileContaier>
                <s.FileNameDisplay
                  type="text"
                  defaultValue={fileName}
                  readOnly
                />
                <s.UploadFile>
                  Choose File
                  <input
                    type="file"
                    style={{
                      opacity: 0,
                      position: "absolute",
                      left: "-9999px",
                    }}
                    onChange={handleChoose}
                  />
                </s.UploadFile>
              </s.UploadFileContaier>

              <s.EncrytContainer showKeyInput={encrypt}>
                <s.EncryptFile
                  type="checkbox"
                  name="Encrypt"
                  id="encrypt"
                  checked={encrypt}
                  onChange={() => setEncrypt(!encrypt)}
                />
                <s.EncryptLabel htmlFor="encrypt">Encrypt</s.EncryptLabel>
              </s.EncrytContainer>

              {encrypt ? (
                <animated.div style={keyAnimation}>
                  <s.EncryptKey
                    type="password"
                    placeholder={error ? error : "Your key here"}
                    error={error}
                    required
                    value={error ? error : key}
                    onChange={(e) => setKey(e.target.value)}
                  />
                </animated.div>
              ) : null}

              <s.ButtonContainer>
                <s.EncryptButton disabled={!encrypt} onClick={handleEncrypt}>
                  Encrypt
                </s.EncryptButton>
                <s.UploadButton onClick={handleUpload} disabled={encrypt}>
                  Upload
                </s.UploadButton>
              </s.ButtonContainer>

              <s.CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </s.ModalWrapper>
          </animated.div>
        </s.Background>
      ) : null}

      {/** Loading  */}
      {uploadingFiles.length > 0 &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "absolute",
              bottom: "10rem",
              right: "3rem",
              maxWidth: "250px",
              zIndex: "1000",
            }}
          >
            {uploadingFiles.map((file) => (
              <Toast
                key={file.id}
                onClose={() => {
                  setUploadingFiles((prevUploadingFiles) => {
                    return prevUploadingFiles.filter((uploadFile) => {
                      return uploadFile.id !== file.id;
                    });
                  });
                }}
              >
                <Toast.Header closeButton={file.error} className="ttdin size">
                  {file.name}
                </Toast.Header>
                <Toast.Body>
                  <s.ProgressBar
                    value={file.error ? 100 : file.progress * 100}
                    max="100"
                    id="uploadFile"
                  >
                    {file.error
                      ? "Error"
                      : `${Math.round(file.progress * 100)}%`}
                  </s.ProgressBar>
                  <s.ProgressLabel htmlFor="uploadFile">
                    {file.error
                      ? "Error"
                      : `${Math.round(file.progress * 100)}%`}
                  </s.ProgressLabel>
                  {/* <ProgressBar
                    animated={!file.error}
                    variant={file.error ? "color:'red'" : "color:'green'"}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error
                        ? "Error"
                        : `${Math.round(file.progress * 100)}%`
                    }
                    className="size"
                  /> */}
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          document.getElementById("main-portal")
        )}
    </>
  );
}

export default AddFileButton;
