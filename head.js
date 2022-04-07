/**
 * takes in an array and returns the first element of the array.
 * @param {array} 
 * @return {element} 
 */

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
module.exports = head;