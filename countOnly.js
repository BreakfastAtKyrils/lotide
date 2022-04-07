/**
 * takes in a collection of items and returns a specific subset of those items.
 * @param {array} 
 * @param {array} 
 * @return {array} 
 */

const countOnly = function(allItems, itemsToCount) {
  let returnObject = {};
  for (let item of allItems) {
    if (item in itemsToCount) {
      if (itemsToCount[item] === true) {
        if (item in returnObject) {
          returnObject[item] ++;
        } else {
          returnObject[item] = 1;
        }
      }
    }
  }
  return returnObject;
};
module.exports = countOnly;