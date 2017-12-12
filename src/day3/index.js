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

const sumSurrounding = function sumSurrounding(cellPos, cells) {
  let value = 0;

  // Create all surrounding cells.
  const surrounding = [];
  surrounding.push({ x: cellPos.x - 1, y: cellPos.y});
  surrounding.push({ x: cellPos.x - 1, y: cellPos.y - 1});
  surrounding.push({ x: cellPos.x, y: cellPos.y - 1});
  surrounding.push({ x: cellPos.x + 1, y: cellPos.y - 1});
  surrounding.push({ x: cellPos.x + 1, y: cellPos.y});
  surrounding.push({ x: cellPos.x + 1, y: cellPos.y + 1});
  surrounding.push({ x: cellPos.x, y: cellPos.y + 1});
  surrounding.push({ x: cellPos.x - 1, y: cellPos.y + 1});

  // For each surrounding cell, get its value and add it to value.
  surrounding.forEach((cell) => {
    if (cells[JSON.stringify(cell)]) {
      value += cells[JSON.stringify(cell)];
    }
  });

  return value === 0 ? 1 : value;
};

const taskTwoCellValue = function taskTwoCellValue(cellId) {
  const cells = {};

  for (let cell = 1; cell < cellId + 1; cell++) {
    const cellPos = getCellPos(cell);
    const cellPosString = JSON.stringify(cellPos);

    // For each cell, get all surrounding values. If one exists, add them together.
    const value = sumSurrounding(cellPos, cells);

    if (value > cellId) {
      return value;
    }

    cells[cellPosString] = value;
  }
};

const taskTwo = function taskTwo(cellId) {
  const pos = getCellPos(cellId);
  const value = taskTwoCellValue(cellId);

  return value;
};

module.exports = {
  taskOne,
  taskTwo,
  taskTwoCellValue,
};
