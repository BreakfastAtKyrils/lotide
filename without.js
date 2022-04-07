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