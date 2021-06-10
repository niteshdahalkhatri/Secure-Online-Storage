import CryptoJS from "crypto-js";

//converts file to wordarray
export const convertWordArrayToUint8Array = (wordArray) => {
  var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
  var length = wordArray.hasOwnProperty("sigBytes")
    ? wordArray.sigBytes
    : arrayOfWords.length * 4;
  var uInt8Array = new Uint8Array(length),
    index = 0,
    word,
    i;
  for (i = 0; i < length; i++) {
    word = arrayOfWords[i];
    uInt8Array[index++] = word >> 24;
    uInt8Array[index++] = (word >> 16) & 0xff;
    uInt8Array[index++] = (word >> 8) & 0xff;
    uInt8Array[index++] = word & 0xff;
  }
  return uInt8Array;
};

export const getSHA256 = async (value) => {
  return await CryptoJS.SHA256(value).toString();
};

export const getKey = async (key) => {
  return await getSHA256("sos-" + key + "-sos");
};

export const encryptFiles = async (
  key,
  setKey,
  file,
  setFiles,
  setEncrypt,
  setIsEncrypting
) => {
  var eKey = await getKey(key);
  setKey(eKey);
  var reader = new FileReader();

  reader.onload = async () => {
    var wordArray = await CryptoJS.lib.WordArray.create(reader.result); // Convert: ArrayBuffer -> WordArray
    var encrypted = await CryptoJS.AES.encrypt(wordArray, eKey).toString(); // Encryption: I: WordArray -> O: -> Base64 encoded string (OpenSSL-format)

    setFiles(encrypted);
    setEncrypt(false);
    setIsEncrypting(true);
  };
  reader.readAsArrayBuffer(file);
};

export const decryptFiles = async (key, file, setUrl, setDisabler) => {
  var type = file.type;
  var decrypted = await CryptoJS.AES.decrypt(file, key); // Decryption: I: Base64 encoded string (OpenSSL-format) -> O: WordArray
  var typedArray = await convertWordArrayToUint8Array(decrypted); // Convert: WordArray -> typed array

  var fileDec = new Blob([typedArray], {
    type,
  }); // Create blob from typed array

  setUrl(URL.createObjectURL(fileDec));
  setDisabler(true);
};

export const encryptFileAndDownload = async (
  key,
  file,
  setEncUrl,
  setEncrypt
) => {
  var eKey = await getKey(key);
  var type = file.type;
  var reader = new FileReader();

  reader.onload = async () => {
    var wordArray = await CryptoJS.lib.WordArray.create(reader.result); // Convert: ArrayBuffer -> WordArray
    var encrypted = await CryptoJS.AES.encrypt(wordArray, eKey).toString(); // Encryption: I: WordArray -> O: -> Base64 encoded string (OpenSSL-format)
    var fileEnc = new Blob([encrypted], {
      type,
    }); // Create blob from string

    setEncUrl(URL.createObjectURL(fileEnc));
    setEncrypt(true);
  };
  reader.readAsArrayBuffer(file);
};

export const decryptFileAndDownload = async (
  key,
  file,
  setdecUrl,
  setDecrypt
) => {
  var eKey = await getKey(key);
  var type = file.type;
  var reader = new FileReader();

  reader.onload = async () => {
    var decrypted = await CryptoJS.AES.decrypt(reader.result, eKey); // Decryption: I: Base64 encoded string (OpenSSL-format) -> O: WordArray
    var typedArray = await convertWordArrayToUint8Array(decrypted); // Convert: WordArray -> typed array
    var fileDec = new Blob([typedArray], {
      type,
    }); // Create blob from string

    setdecUrl(URL.createObjectURL(fileDec));
    setDecrypt(true);
  };
  reader.readAsText(file);
};
