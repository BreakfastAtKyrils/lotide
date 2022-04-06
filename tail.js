const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  }
  let tailReturn = array;
  tailReturn.shift();
  return tailReturn;
};



module.exports = tail;
