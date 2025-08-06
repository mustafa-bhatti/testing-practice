const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const ceaserCipher = require('./ceaserCipher');
test('capitilize the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverses the string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('adds two numbers', () => {
  expect(calculator.add(5, 5)).toEqual(10);
});
test('Subtract two numbers', () => {
  expect(calculator.subtract(5, 5)).toEqual(0);
});
test('multiply two numbers', () => {
  expect(calculator.multiply(5, 5)).toEqual(25);
});
test('divide two numbers', () => {
  expect(calculator.divide(5, 5)).toEqual(1);
});
// ceaserCipher Tests
test('simple cipher without wrapping', () => {
  expect(ceaserCipher('abc', 3)).toBe('def');
});
test('cipher with wrapping', () => {
  expect(ceaserCipher('xyz', 3)).toBe('abc');
});
test('cipher with case preservation', () => {
  expect(ceaserCipher('xYz', 3)).toBe('aBc');
});
