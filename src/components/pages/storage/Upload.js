import React, { useState } from "react";
import * as s from "./styles/Upload.style";
import { encryptFileAndDownload } from "./encryption/encryptionFunction";

function Upload() {
  const [encrypt, setEncrypt] = useState(false);
  const [fileName, setFileName] = useState("");
  const [key, setKey] = useState("");
  const [encUrl, setEncUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [files, setFiles] = useState("");

  function handleChoose(e) {
    const file = e.target.files[0];
    if (file == null) return;
    setFileName(file.name);
    setFiles(file);
  }

  async function handleEncrypt() {
    if (files === "") return;
    if (key === "" || key.length < 8) {
      setErrMsg("Empty key or inappropriate key length");
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
      return;
    }
    await encryptFileAndDownload(key, files, setEncUrl, setEncrypt);
  }

  function encryptionFinish() {
    setEncrypt(!encrypt);
    setTimeout(() => {
      setFileName("");
      setKey("");
    }, 1000);
  }

  return (
    <>
      <s.UploadSection>
        <s.UploadDiv>
          <s.UploadIcon />

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

          <s.EncryptLabel htmlFor="encrypt">Encrypt</s.EncryptLabel>
          <s.EncryptKey
            type={errMsg ? "text" : "password"}
            autoFocus
            placeholder="your key here"
            id="encrypt"
            required
            error={errMsg}
            value={errMsg ? errMsg : key}
            onChange={(e) => setKey(e.target.value)}
          />

          <s.ButtonContainer>
            <s.EncryptButton disabled={encrypt} onClick={handleEncrypt}>
              Encrypt
            </s.EncryptButton>
            <s.DownloadButton
              disabled={!encrypt}
              href={encUrl}
              download={fileName}
              onClick={encryptionFinish}
            >
              Download
            </s.DownloadButton>
          </s.ButtonContainer>
        </s.UploadDiv>
      </s.UploadSection>
    </>
  );
}

export default Upload;
