const getCellPos = function getCellPos(cellId) {
  let leg = 1; // count
  let legLength = 1; // length
  let legEnd = 2; // cellId
  let x = 0;
  let y = 0;

  // Loop through each cell.
  for (let cell = 1; cell <= cellId; cell++) {
    // Identify the last cell of the leg.
    if (cell === legEnd) {
      // Update the current leg.
      leg += 1;
      // Update the length of the current leg if this is an odd leg.
      if (leg % 2) {
        legLength = (leg + 1) / 2;
      }
      // Set the new leg end.
      legEnd = cell + legLength;
    }

    console.log(`Cell:  ${cell}\tLeg: ${leg}\tLength: ${legLength}\tLeg End: ${legEnd}`);
  }
};

const taskOne = function taskOne(cellId) {
  const cellPos = getCellPos(cellId);
};

const taskTwo = function taskTwo(input) {

};

module.exports = {
  taskOne,
  taskTwo,
};

taskOne(12);