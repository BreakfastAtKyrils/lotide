/**
 * takes in a source array and an itemsToRemove arrays and 
 * returns only the items from the source array that are not in the itemsToRemove array.
 * @param {array} 
 * @param {array} 
 * @return {array}
 */

const without = function(source, itemsToRemove) {
  let returnArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      returnArray.push(item);
    }
  }
  return returnArray;
};
module.exports = without;