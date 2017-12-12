const day4 = require('../../src/day4');

test('Day Four Task One', () => {
  expect(day4.processPassphrase('aa bb cc dd ee')).toBe(true);
  expect(day4.processPassphrase('aa bb cc dd aa')).toBe(false);
  expect(day4.processPassphrase('aa bb cc dd aaa')).toBe(true);
});

test('Day Four Task Two', () => {

});
