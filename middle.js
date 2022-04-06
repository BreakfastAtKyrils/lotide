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

module.exports = middle;
