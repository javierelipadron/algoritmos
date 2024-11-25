const crypto = require("crypto");

function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });

  return { publicKey, privateKey };
}

function encryptMessage(publicKey, message) {
  const encryptedMessage = crypto.publicEncrypt(
    publicKey,
    Buffer.from(message)
  );
  return encryptedMessage.toString("base64");
}

function decryptMessage(privateKey, encryptedMessage) {
  const decryptedMessage = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedMessage, "base64")
  );
  return decryptedMessage.toString("utf8");
}

// Ejemplo de uso
const { publicKey, privateKey } = generateKeyPair();
console.log("Clave pública:", publicKey);
console.log("Clave privada:", privateKey);

const message = "Hola, este es un mensaje secreto!";
const encryptedMessage = encryptMessage(publicKey, message);
console.log("Mensaje encriptado:", encryptedMessage);

const decryptedMessage = decryptMessage(privateKey, encryptedMessage);
console.log("Mensaje desencriptado:", decryptedMessage);
