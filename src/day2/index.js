const processArray = function processArray(input) {
  // Split by lines.
  const inputArray = input.split('\n');

  // Create a 2D array.
  const spreadsheetArray = [];
  inputArray.forEach((row) => {
    spreadsheetArray.push(row.split(/\s+/));
  });

  // Turn into numbers.
  spreadsheetArray.forEach((row) => {
    row.forEach((cell, i) => {
      row[i] = parseInt(cell);
    })
  });

  return spreadsheetArray;
};

const getHighestValue = function getHighestValue(row) {
  let value = row[0];
  row.forEach((cell) => {
    if (cell > value) {
      value = cell;
    }
  });
  return value;
};

const getLowestValue = function getLowestValue(row) {
  let value = row[0];
  row.forEach((cell) => {
    if (cell < value) {
      value = cell;
    }
  });
  return value;
};

// For each row, calculate difference between highest and lowest value.
const calculateRowDifference = function calculateRowDifference(spreadsheet) {
  let checksum = 0;

  // For each row
  spreadsheet.forEach((row) => {
    const highestValue = getHighestValue(row);
    const lowestValue = getLowestValue(row);

    const difference = highestValue - lowestValue;
    checksum += difference;
  });

  return checksum;
};

const taskOne = function taskOne(input) {
  const spreadsheet = processArray(input);
  const checksum = calculateRowDifference(spreadsheet);

  return checksum;
};

const taskTwo = function taskTwo(input) {
  const spreadsheet = processArray(input);
};

module.exports = {
  taskOne,
  taskTwo,
};