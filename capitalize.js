function capitalize(str) {
  if (str.length > 0) {
    str = str[0].toUpperCase() + str.slice(1);
  } else {
    throw new console.error('string is empty');
  }
 return str;

};

module.exports = capitalize;
