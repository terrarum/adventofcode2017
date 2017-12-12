const day4 = require('../../src/day4');

test('Day Four Task One', () => {
  expect(day4.processPassphrase('aa bb cc dd ee')).toBe(true);
  expect(day4.processPassphrase('aa bb cc dd aa')).toBe(false);
  expect(day4.processPassphrase('aa bb cc dd aaa')).toBe(true);
});

test('Day Four Task Two', () => {
  expect(day4.processAnagramPassphrase('abcde fghij')).toBe(true);
  expect(day4.processAnagramPassphrase('abcde xyz ecdab')).toBe(false);
  expect(day4.processAnagramPassphrase('a ab abc abd abf abj')).toBe(true);
  expect(day4.processAnagramPassphrase('iiii oiii ooii oooi oooo')).toBe(true);
  expect(day4.processAnagramPassphrase('oiii ioii iioi iiio')).toBe(false);
});
