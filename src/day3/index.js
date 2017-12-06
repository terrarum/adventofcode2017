const isOdd = function isOdd(num) {
  return num % 2;
};

const isEven = function isEven(num) {
  return !isOdd(num);
};

const getVector = function getVector(leg, legLength) {
  if (isEven(leg) && isOdd(legLength)) {
    return { x: 0, y: 1}
  }
  if (isOdd(leg) && isEven(legLength)) {
    return { x: -1, y: 0}
  }
  if (isOdd(leg) && isOdd(legLength)) {
    return { x: 1, y: 0}
  }
  if (isEven(leg) && isEven(legLength)) {
    return { x: 0, y: -1}
  }
};

const getCellPos = function getCellPos(cellId) {
  let leg = 1; // count
  let legLength = 1; // length
  let legEnd = 2; // cellId

  let currentCell = {
    x: 0,
    y: 0
  };

  let vector = {
    x: 1,
    y: 0,
  };

  // Loop through each cell id.
  for (let cell = 1; cell < cellId; cell++) {
    // Identify the last cell of the leg.
    if (cell === legEnd) {
      // Update the current leg.
      leg += 1;
      // Update the length of the current leg if this is an odd leg.
      if (isOdd(leg)) {
        legLength = (leg + 1) / 2;
      }
      // Set the new leg end.
      legEnd = cell + legLength;
      // Get vector.
      vector = getVector(leg, legLength);
    }
    currentCell.x += vector.x;
    currentCell.y += vector.y;

    if (cell === cellId - 1) {
      return currentCell;
    }
  }

  return currentCell;
};

const taskOne = function taskOne(cellId) {
  const cellPos = getCellPos(cellId);
  console.log(cellPos);
  return 0;
};

const taskTwo = function taskTwo(input) {

};

module.exports = {
  taskOne,
  taskTwo,
};
