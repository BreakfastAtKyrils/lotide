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

const middle = function(source) {
  if (source.length <= 2) {
    return []
  }
  if (source.length % 2 === 0) {
    const second = source.length / 2;
    const first = second - 1;
    return [source[first], source[second]]
  }
  else {
    const first = Math.trunc(source.length / 2)
    return [source[first]]
  }
}

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4])