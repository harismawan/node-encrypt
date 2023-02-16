
# node-encrypted
Simple & easy way to encrypt (and decrypt) string on node.js.

We build this library to provide an easiest way as possible to encrypt and decrypt string, while also being incredibly secure.

## Supported algorithm:
- aes-128-gcm
- aes-192-gcm
- aes-256-gcm
- more to be supported!

  
## Installation
```
npm install --save node-encrypted
```

## Usage
```javascript
import { encrypt, decrypt } from  'node-encrypted';
// const { encrypt, decrypt } = require('node-encrypted'); // legacy way

const encryptedString = encrypt('aes-256-gcm', 'very secret text', 'secret');
// W9RFn97WvNuMbQw=*8r053fqPKXMHPx2O34UnyQ==*zJ7S1U95GRvRhTfo/CfhFA==*vQOEQZKf9mWEhdoyUnfWiA==

const decrypted = decrypt('aes-256-gcm', encryptedString, 'secret');
// very secret text
```
