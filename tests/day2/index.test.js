const day2 = require('../../src/day2');

const taskOneInput = `5 1 9 5
7 5 3
2 4 6 8`;

const taskTwoInput = `5 9 2 8
9 4 7 3
3 8 6 5`;

test('Task One', () => {
  expect(day2.taskOne(taskOneInput)).toBe(18);
});

test('Task Two', () => {
  expect(day2.taskTwo(taskTwoInput)).toBe(9);
});
