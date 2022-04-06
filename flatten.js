const flatten = function(source) {
  let returnArray = [];
  for (let item of source) {
    if (Array.isArray(item)) {
      for (let x = 0; x < item.length; x ++) {
        returnArray.push(item[x]);
      }
    } else {
      returnArray.push(item);
    }

  }
  return returnArray;
};


module.exports = flatten;