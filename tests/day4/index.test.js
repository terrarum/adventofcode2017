const day4 = require('../../src/day4');

test('Day Four Task One', () => {
  expect(day4.processPassphrase('aa bb cc dd ee')).toBe(true);
  expect(day4.processPassphrase('aa bb cc dd aa')).toBe(false);
  expect(day4.processPassphrase('aa bb cc dd aaa')).toBe(true);
});

test('Day Four Task Two', () => {
  expect(day4.processPassphrase('abcde fghij', true)).toBe(true);
  expect(day4.processPassphrase('abcde xyz ecdab', true)).toBe(false);
  expect(day4.processPassphrase('a ab abc abd abf abj', true)).toBe(true);
  expect(day4.processPassphrase('iiii oiii ooii oooi oooo', true)).toBe(true);
  expect(day4.processPassphrase('oiii ioii iioi iiio', true)).toBe(false);
});
