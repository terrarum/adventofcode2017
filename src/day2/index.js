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

  // For each row.
  spreadsheet.forEach((row) => {
    // Get the highest cell value.
    const highestValue = getHighestValue(row);

    // Get the lowest cell value.
    const lowestValue = getLowestValue(row);

    // Get the difference.
    const difference = highestValue - lowestValue;

    // Add to the checksum.
    checksum += difference;
  });

  return checksum;
};

const findDivisible = function findDivisible(row) {
  let result = null;
  // For each item in the row, divide it by the other items.
  row.forEach((dividend) => {
    row.forEach((divisor) => {
      if (dividend === divisor) return;
      if (divisor > dividend) return;

      const division = dividend / divisor;

      // If any result is a whole number, stop and return that.
      if (Number.isInteger(division)) {
        result += division;
      }
    });
  });

  return result;
};

const calculateRowDivisible = function calculateRowDivisible(spreadsheet) {
  let checksum = 0;

  // For each row.
  spreadsheet.forEach((row) => {
    // Divide each number by every other number.
    // If the result is a whole number, add the result to the checksum.
    const result = findDivisible(row);

    checksum += result;
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
  const checksum = calculateRowDivisible(spreadsheet);

  return checksum;
};

module.exports = {
  taskOne,
  taskTwo,
};