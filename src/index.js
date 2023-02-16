import crypto from 'crypto';

const keyLength = {
  'aes-128-gcm': 16,
  'aes-192-gcm': 24,
  'aes-256-gcm': 32
};

const generateKey = (algorithm, salt, password) => {
  return crypto.scryptSync(password, salt, keyLength[algorithm], { N: 2 ** 14, r: 8, p: 1 });
};

export const encrypt = (algorithm, text, password) => {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(16);

  // generate private key
  const privateKey = generateKey(algorithm, salt, password);

  // encrypt the text
  const cipher = crypto.createCipheriv(algorithm, privateKey, iv);
  const encryptedData = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);

  // map encrypted data with salt, iv & auth tag
  return `${encryptedData.toString('base64')}*${salt.toString('base64')}*${iv.toString('base64')}*${cipher.getAuthTag().toString('base64')}`;
};

export const decrypt = (algorithm, encrypted, password) => {
  try {
    const encArr = encrypted.split('*');

    const encryptedText = Buffer.from(encArr[0], 'base64');
    const salt = Buffer.from(encArr[1], 'base64');
    const iv = Buffer.from(encArr[2], 'base64');
    const tag = Buffer.from(encArr[3], 'base64');

    // generate private key from provided salt & password
    const privateKey = generateKey(algorithm, salt, password);

    // decrypt the text
    const decipher = crypto.createDecipheriv(algorithm, privateKey, iv);
    decipher.setAuthTag(tag);

    // return decrypted text
    return `${decipher.update(encryptedText, 'binary', 'utf8')}${decipher.final()}`;
  } catch (e) {
    return false;
  }
};