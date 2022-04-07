/**
 * takes in an array and returns everything except the first element of the array.
 * @param {array} 
 * @return {array}
 */

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  }
  let tailReturn = array;
  tailReturn.shift();
  return tailReturn;
};



module.exports = tail;
