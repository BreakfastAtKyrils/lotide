const eqObjects = function(object1, object2) {
  //first we check if they have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    //console.log(`Comparing ${object1[key]} with ${object2[key]}`)
    //base case
    if (!isObject(object1[key]) && !isObject(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    //recursive case
    else {
      return eqObjects(object1[key], object2[key])
    }
  }
  return true;
};

//this functions returns true if a value is an Object
const isObject = function(value) {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return true
      }
  return false;
}
module.exports = eqObjects;
