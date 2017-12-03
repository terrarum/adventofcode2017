const getNextNumber = function getNextNumber(index, inputArray) {
  index += 1;
  if (index === inputArray.length) {
    index = 0;
  }
  return parseInt(inputArray[index]);
};

const getOppositeNumber = function getOppositeNumber(index, inputArray) {
  index += inputArray.length / 2;
  if (index > inputArray.length - 1) {
    index -= inputArray.length;
  }
  return parseInt(inputArray[index]);
};

const taskOne = function taskOne(input) {
  input = input.toString();
  const inputArray = input.split('');
  let total = 0;

  inputArray.forEach((number, index) => {
    const num = parseInt(number);
    const nextNum = getNextNumber(index, inputArray);

    if (num === nextNum) {
      total += num;
    }
  });

  return total;
};

const taskTwo = function taskOne(input) {
  input = input.toString();
  const inputArray = input.split('');
  let total = 0;

  inputArray.forEach((number, index) => {
    const num = parseInt(number);
    const nextNum = getOppositeNumber(index, inputArray);
    if (num === nextNum) {
      total += num;
    }
  });

  return total;
};

module.exports = {
  taskOne,
  taskTwo,
};
