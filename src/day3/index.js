const isOdd = function isOdd(num) {
  return num % 2;
};

const isEven = function isEven(num) {
  return !isOdd(num);
};

const pad = function pad(num) {
  return num < 10 ? `0${num}` : num;
};

const getVector = function getVector(leg, legLength) {
  if (isEven(leg) && isOdd(legLength)) {
    return { x: 1, y: 0}
  }
  if (isOdd(leg) && isEven(legLength)) {
    return { x: -1, y: 0}
  }
  if (isOdd(leg) && isOdd(legLength)) {
    return { x: 0, y: 1}
  }
  if (isEven(leg) && isEven(legLength)) {
    return { x: 0, y: -1}
  }
};

const expected = {
  1: 1,
  2: 1,
  3: 2,
  4: 4,
  5: 5,
  6: 10,
  7: 11,
  8: 23,
  9: 25,
  10: 26,
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
    x: 0,
    y: 0,
  };

  for (let cell = 1; cell < cellId + 1; cell++) {
    if (cell === legEnd) {
      leg += 1;
      if (isOdd(leg)) {
        legLength = (leg + 1) / 2;
      }
      legEnd = cell + legLength;
      vector = getVector(leg, legLength);
    }

    currentCell.x += vector.x;
    currentCell.y += vector.y;
    console.log(`cellId: ${cellId}\tx: ${currentCell.x}\ty: ${currentCell.y}\tleg: ${leg}\tlegLength: ${legLength}\tdist: ${calculateManhatten(currentCell)}`);
  }

  return currentCell;
};

const calculateManhatten = function calculateManhatten(pos) {
  return Math.abs(pos.x) + Math.abs(pos.y);
};

const taskOne = function taskOne(cellId) {
  const cellPos = getCellPos(cellId);
  const manhatten = calculateManhatten(cellPos);

  return manhatten;
};

const taskTwo = function taskTwo(cellId) {
  const cellPos = getCellPos(cellId);

  return 1;
};

module.exports = {
  taskOne,
  taskTwo,
};