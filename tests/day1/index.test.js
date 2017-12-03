const day1 = require('../../src/day1');

test('Day One', () => {
  expect(day1.taskOne(1122)).toBe(3);
  expect(day1.taskOne(1111)).toBe(4);
  expect(day1.taskOne(1234)).toBe(0);
  expect(day1.taskOne(91212129)).toBe(9);
});

test('Day Two', () => {
  expect(day1.taskTwo(1212)).toBe(6);
  expect(day1.taskTwo(1221)).toBe(0);
  expect(day1.taskTwo(123425)).toBe(4);
  expect(day1.taskTwo(123123)).toBe(12);
  expect(day1.taskTwo(12131415)).toBe(4);
});
