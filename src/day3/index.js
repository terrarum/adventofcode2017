const isOdd = function isOdd(num) {
  return num % 2;
};

const pad = function pad(num) {
  return num < 10 ? `0${num}` : num;
};

const getVector = function getVector(dir) {
  if (dir === 0) { // right
    return { x: 1, y: 0}
  }
  if (dir === 1) { // up
    return { x: 0, y: 1}
  }
  if (dir === 2) { // left
    return { x: -1, y: 0}
  }
  if (dir === 3) { // down
    return { x: 0, y: -1}
  }
};

const getCellPos = function getCellPos(cellId) {
  let leg = 1; // count
  let legLength = 1; // length
  let legEnd = 2; // cellId
  let dir = 0;

  let currentCell = {
    x: 1,
    y: 0
  };

  let vector = {
    x: 0,
    y: 0,
  };

  if (cellId === 1) {
    return {x: 0, y: 0};
  }

  for (let cell = 1; cell < cellId; cell++) {
    if (cell === legEnd) {
      leg += 1;
      dir += 1;
      dir = dir > 3 ? 0 : dir;
      if (isOdd(leg)) {
        legLength = (leg + 1) / 2;
      }
      legEnd = cell + legLength;
      vector = getVector(dir);
    }

    currentCell.x += vector.x;
    currentCell.y += vector.y;
    console.log(cell, dir, vector, currentCell);
  }

  return currentCell;
};

const calculateManhattan = function calculateManhattan(pos) {
  return Math.abs(pos.x) + Math.abs(pos.y);
};

const taskOne = function taskOne(cellId) {
  const cellPos = getCellPos(cellId);
  const manhattan = calculateManhattan(cellPos);

  return manhattan;
};

const sumSurrounding = function sumSurrounding(pos) {

};

const taskTwo = function taskTwo(cellId) {
  const cellPos = getCellPos(cellId);

  return 1;
};

module.exports = {
  taskOne,
  taskTwo,
};
