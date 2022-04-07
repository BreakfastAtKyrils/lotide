const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x ++) {
  //base case
  if (!Array.isArray(array1[x]) && !Array.isArray(array2[x]))
    if (array1[x] !== array2[x]) {
      return false;
    }
    //recursive case
    else {
      eqArrays(array1[x], array2[x])
    }
  }
  return true;
};
module.exports = eqArrays;