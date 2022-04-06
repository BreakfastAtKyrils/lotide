const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let returnObject = {};
  for (let char of string) {
    if (char in returnObject) {
      returnObject[char] ++;
    } else {
      returnObject[char] = 1;
    }
  }
  return returnObject;
};

console.log(countLetters('ABBCCCDDDD'));