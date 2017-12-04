const day1 = require('../../src/day1');

test('Task One', () => {
  expect(day1.taskOne(1)).toBe(0);
  expect(day1.taskOne(12)).toBe(3);
  expect(day1.taskOne(23)).toBe(2);
  expect(day1.taskOne(1024)).toBe(31);
});

test('Task Two', () => {

});
