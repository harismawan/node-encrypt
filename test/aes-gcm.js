import { encrypt, decrypt } from '../src/index.js';
import { strictEqual } from 'assert';

describe('aes-128-gcm', () => {
  const secretText = 'secret text';
  const secret = 'secret';
  let encrypted;

  describe('encrypt', () => {
    it('should successfuly encrypt text', () => {
      encrypted = encrypt('aes-128-gcm', secretText, secret);
    });
  });

  describe('decrypt', () => {
    it('should successfuly decrypt text', () => {
      const decrypted = decrypt('aes-128-gcm', encrypted, secret);
      strictEqual(secretText, decrypted);
    });
  });
});

describe('aes-192-gcm', () => {
  const secretText = 'secret text';
  const secret = 'secret';
  let encrypted;

  describe('encrypt', () => {
    it('should successfuly encrypt text', () => {
      encrypted = encrypt('aes-192-gcm', secretText, secret);
    });
  });

  describe('decrypt', () => {
    it('should successfuly decrypt text', () => {
      const decrypted = decrypt('aes-192-gcm', encrypted, secret);
      strictEqual(secretText, decrypted);
    });
  });
});

describe('aes-256-gcm', () => {
  const secretText = 'secret text';
  const secret = 'secret';
  let encrypted;

  describe('encrypt', () => {
    it('should successfuly encrypt text', () => {
      encrypted = encrypt('aes-256-gcm', secretText, secret);
    });
  });

  describe('decrypt', () => {
    it('should successfuly decrypt text', () => {
      const decrypted = decrypt('aes-256-gcm', encrypted, secret);
      strictEqual(secretText, decrypted);
    });
  });
});