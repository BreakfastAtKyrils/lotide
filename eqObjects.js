const eqObjects = function(object1, object2) {
  //first we check if they have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true
};
module.exports = eqObjects;