const day3 = require('../../src/day3');

test('Task One', () => {
  expect(day3.taskOne(1)).toBe(0);
  expect(day3.taskOne(12)).toBe(3);
  expect(day3.taskOne(23)).toBe(2);
  expect(day3.taskOne(1024)).toBe(31);
});

test('Task Two', () => {
  expect(day3.taskTwo(1)).toBe(1);
  expect(day3.taskOne(2)).toBe(1);
  expect(day3.taskOne(3)).toBe(2);
  expect(day3.taskOne(4)).toBe(4);
  expect(day3.taskOne(5)).toBe(5);
});
