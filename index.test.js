const capitalize = require('./capitalize');
test('capitilize the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
