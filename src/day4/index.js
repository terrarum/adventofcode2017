const processPassphrase = function processPassphrase(passphrase) {
  let count = 0;

  const passArr = passphrase.split(' ');

  passArr.forEach((currentWord) => {
    passArr.forEach((word) => {
      count += word === currentWord ? 1 : 0;
    })
  });

  return count === 1;
};

const taskOne = function taskOne(passphrase) {
  // Split by spaces.

  // For each item, see if it exists in the array more than once.

};

const taskTwo = function taskOne(input) {

};

module.exports = {
  taskOne,
  processPassphrase,
  taskTwo,
};
