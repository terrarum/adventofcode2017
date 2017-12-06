const day3 = require('../../src/day3');

test('Task One', () => {
  expect(day3.taskOne(1)).toBe(0);
  expect(day3.taskOne(12)).toBe(3);
  expect(day3.taskOne(23)).toBe(2);
  expect(day3.taskOne(1024)).toBe(31);
});

test('Task Two', () => {

});
