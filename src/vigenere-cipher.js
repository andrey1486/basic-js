const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  crypt(message, key, type) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultStr = '';
    let j = 0;
    for (let i = 0;  i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        resultStr += message[i];
      } else {
        if (type) {
          resultStr += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 2 * 65) % 26 + 65);
        } else {
          resultStr += String.fromCharCode((message.charCodeAt(i) - key.charCodeAt(j % key.length) + 26) % 26 + 65);
        }
        j++;
      }
    }
    return this.mode ? resultStr : resultStr.split('').reverse().join('');
  }
  encrypt(message, key) {
    return this.crypt(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    return this.crypt(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
