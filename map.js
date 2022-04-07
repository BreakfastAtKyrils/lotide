/**
 *  takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
 * @param {array} 
 * @param {callback function}
 * @return {array} 
 */

const map = function(array, callback) {
  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;
