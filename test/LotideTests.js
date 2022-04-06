const assert = require('chai').assert;
const head   = require('../head');
const tail   = require('../tail')
const middle = require('../middle')

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
});

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [1] for ['Hello', 1]", () => {
        assert.deepEqual(tail(["Hello", 1]), [1]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  }); 
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  }); 
});

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [] for [2]", () => {
    assert.deepEqual(middle([2]), []);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3] for [2, 3, 4]", () => {
    assert.deepEqual(middle([2, 3, 4]), [3]);
  });
});