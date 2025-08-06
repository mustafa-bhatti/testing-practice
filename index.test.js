const capitalize = require('./capitalize');
const reverseString = require('./reverseString');

test('capitilize the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverses the string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
