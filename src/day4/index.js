const sortAlphabetically = function sortAlphabetically(text) {
  return text.split('').sort().join('');
};

const isAnagram = function isAnagram(a, b) {
  return sortAlphabetically(a) === sortAlphabetically(b);
};

const processPassphrase = function processPassphrase(passphrase, checkAnagram = false) {
  let count = 0;

  const passArr = passphrase.split(' ');

  passArr.forEach((currentWord) => {
    passArr.forEach((word) => {
      if (word === currentWord) {
        count++;
      }
    })
  });

  // Is this a valid passphrase?
  let isValid = count === passArr.length;

  // If it is valid and we're checking for anagrams, run anagram check.
  if (checkAnagram && isValid) {
    passArr.forEach((currentWord) => {
      passArr.forEach((word) => {
        if (word !== currentWord) {
          // console.log(`Is ${word} an anagram of ${currentWord}? ${isAnagram(word, currentWord)}`);
          if (isAnagram(word, currentWord)) {
            isValid = false;
          }
        }
      })
    });
  }

  return isValid;

};

const taskOne = function taskOne(passphrases) {
  const passphrasesArray = passphrases.split('\n');
  let validPhraseCount = 0;
  passphrasesArray.forEach((passphrase) => {
    if (processPassphrase(passphrase)) {
      validPhraseCount++;
    }
  });
  return validPhraseCount;
};

const taskTwo = function taskOne(passphrases) {
  const passphrasesArray = passphrases.split('\n');
  let validPhraseCount = 0;
  passphrasesArray.forEach((passphrase) => {
    if (processPassphrase(passphrase, true)) {
      validPhraseCount++;
    }
  });
  return validPhraseCount;
};

module.exports = {
  processPassphrase,
  taskOne,
  taskTwo,
};
