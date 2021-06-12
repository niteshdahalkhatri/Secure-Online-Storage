import React, { useState } from "react";
import * as s from "./styles/Upload.style";
import { decryptFileAndDownload } from "./encryption/encryptionFunction";

function Decrypt() {
  const [decrypt, setDecrypt] = useState(false);
  const [fileName, setFileName] = useState("");
  const [key, setKey] = useState("");
  const [decUrl, setDecUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [files, setFiles] = useState("");
  function handleChoose(e) {
    const file = e.target.files[0];
    if (file == null) return;
    setFileName(file.name);
    setFiles(file);
  }
  async function handleDecrypt() {
    if (files === "") return;
    if (key === "" || key.length < 8) {
      setErrMsg("Empty key or inappropriate key length");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      return;
    }
    await decryptFileAndDownload(key, files, setDecUrl, setDecrypt);
  }

  function decryptionFinish() {
    setDecrypt(!decrypt);
    setTimeout(() => {
      setFileName("");
      setKey("");
    }, 1000);
  }
  return (
    <>
      <s.UploadSection>
        <s.UploadDiv>
          <s.DecryptIcon />

          <s.UploadFileContaier>
            <s.FileNameDisplay type="text" defaultValue={fileName} readOnly />
            <s.UploadFile>
              Choose File
              <input
                type="file"
                style={{ opacity: 0, position: "absolute", left: "-9999px" }}
                onChange={handleChoose}
              />
            </s.UploadFile>
          </s.UploadFileContaier>

          <s.EncryptLabel htmlFor="encrypt">Decrypt</s.EncryptLabel>
          <s.EncryptKey
            type="password"
            autoFocus
            placeholder="your key here"
            id="encrypt"
            required
            error={errMsg}
            value={errMsg ? errMsg : key}
            onChange={(e) => setKey(e.target.value)}
          />

          <s.ButtonContainer>
            <s.EncryptButton disabled={decrypt} onClick={handleDecrypt}>
              Decrypt
            </s.EncryptButton>
            <s.DownloadButton
              disabled={!decrypt}
              href={decUrl}
              download={fileName}
              onClick={decryptionFinish}
            >
              Download
            </s.DownloadButton>
          </s.ButtonContainer>
        </s.UploadDiv>
      </s.UploadSection>
    </>
  );
}

export default Decrypt;
