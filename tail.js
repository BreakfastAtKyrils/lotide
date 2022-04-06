const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  }
  let tailReturn = array;
  tailReturn.shift();
  return tailReturn;
};




const words = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
