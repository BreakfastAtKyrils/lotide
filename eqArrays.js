const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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




assertEqual(eqArrays([], []), true); // => should PASS