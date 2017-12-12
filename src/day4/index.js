const processPassphrase = function processPassphrase(passphrase) {
  let count = 0;

  const passArr = passphrase.split(' ');

  passArr.forEach((currentWord) => {
    passArr.forEach((word) => {
      if (word === currentWord) {
        count++;
      }
    })
  });


  return count === passArr.length;
};

const taskOne = function taskOne(passphrases) {
  passphrasesArray = passphrases.split('\n');
  let validPhraseCount = 0;
  passphrasesArray.forEach((passphrase) => {
    if (processPassphrase(passphrase)) {
      validPhraseCount++;
    }
  });
  return validPhraseCount;
};

const taskTwo = function taskOne(input) {

};

module.exports = {
  taskOne,
  processPassphrase,
  taskTwo,
};
