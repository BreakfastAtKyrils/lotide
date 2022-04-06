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