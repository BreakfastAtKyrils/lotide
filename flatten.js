const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x ++; x < array1.length) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }

  return true;
}
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

const flatten = function(source) {
  let returnArray = [];
  for (let item of source) {
    if (Array.isArray(item)){
      for (let x = 0; x < item.length; x ++) {
        returnArray.push(item[x])
      }
    }
    else {
      returnArray.push(item)
    }

  }
  return returnArray;
}


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]