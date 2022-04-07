/**
 * takes in an object and a value and returns the first key that corresponds to that value.
 * @param {object} 
 * @param {value} 
 * @return {key} 
 */
const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;