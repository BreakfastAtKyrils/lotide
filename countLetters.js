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
module.exports = countLetters;