const ceaserCipher = function (plainText, shift) {
  let cipher = '';
  let asciiLowerCharCodeStart = 97;
  let asciiLowerCharCodeEnd = 122;
  let asciiUpperCharCodeStart = 65;
  let asciiUpperCharCodeEnd = 90;

  for (let i = 0; i < plainText.length; i++) {
    let charCode = plainText.charCodeAt(i);
    if (charCode + shift > asciiLowerCharCodeEnd) {
      charCode =
        asciiLowerCharCodeStart +
        (charCode + shift - 1 - asciiLowerCharCodeEnd);
    } else if (
      charCode + shift > asciiUpperCharCodeEnd &&
      charCode < asciiLowerCharCodeStart
    ) {
      charCode =
        asciiUpperCharCodeStart +
        (charCode + shift - 1 - asciiUpperCharCodeEnd);
    } else {
      charCode += shift;
    }
    if (charCode < asciiLowerCharCodeStart) {
      cipher += String.fromCharCode(charCode).toUpperCase();
    } else {
      cipher += String.fromCharCode(charCode);
    }
  }
  return cipher;
};
module.exports = ceaserCipher;
