const day3 = require('../../src/day3');

test('Day Three Task One', () => {
  expect(day3.taskOne(1)).toBe(0);
  expect(day3.taskOne(3)).toBe(2);
  expect(day3.taskOne(4)).toBe(1);
  expect(day3.taskOne(10)).toBe(3);
  expect(day3.taskOne(12)).toBe(3);
  expect(day3.taskOne(23)).toBe(2);
  expect(day3.taskOne(1024)).toBe(31);
});

test('Day Three Task Two', () => {
  expect(day3.taskTwoCellValue(1)).toBe(1);
  expect(day3.taskTwoCellValue(2)).toBe(1);
  expect(day3.taskTwoCellValue(3)).toBe(2);
  expect(day3.taskTwoCellValue(4)).toBe(4);
  expect(day3.taskTwoCellValue(5)).toBe(5);
  expect(day3.taskTwoCellValue(6)).toBe(10);
  expect(day3.taskTwoCellValue(10)).toBe(26);
  expect(day3.taskTwoCellValue(21)).toBe(362);
});
