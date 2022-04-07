const assert = require('chai').assert;

const head   = require('../head');
const tail   = require('../tail');
const middle = require('../middle');
const map    = require('../map');
const flatten = require('../flatten');
const countOnly = require('../countonly');
const letterPositions = require('../letterPositions');
const findKeyByValue = require('../findKeyByValue');
const eqObjects = require('../eqObjects');
const eqArrays = require('../eqArrays');
const without = require('../without');

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
describe("#map", () => {
  it("returns ['g', 'f', 'h'] for ['gg', 'ff', 'hh'], word => word[0]", () => {
    assert.deepEqual(map(['gg', 'ff', 'hh'], word => word[0]), ['g', 'f', 'h']);
  });
  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
});
describe("#flatten", () => {
  it("returns [1, 2, 3, 4] for [[1, 2], 3, 4]", () => {
    assert.deepEqual(flatten([[1, 2], 3, 4]), [1, 2, 3, 4]);
  });
  it("returns [1, 2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
});
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("returns 1 for results['Jason']", () => {
    assert.deepEqual(results["Jason"], 1);
  });
  it("returns undefined for results['Karima']", () => {
    assert.deepEqual(results["Karima"], undefined);
  });
});
describe("#letterPositions", () => {
  it("returns {h: [0], e: [1], l: [2, 3], o: [4]} for 'hello'", () => {
    assert.deepEqual(letterPositions('hello'), {h: [0], e: [1], l: [2, 3], o: [4]});
  });
  it("returns {} for ''", () => {
    assert.deepEqual(letterPositions(''), {});
  });
});
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("returns 'drama' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it("returns undefined for (bestTVShowsByGenre, 'That 70s Show')", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
  });

});
describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  it("returns true for (ab, ba))", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false for (ab, abc))", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("returns true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) )", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) , true);
  });
  it("returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) )", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) , false);
  });
  it("returns false for ({a:1}, {a:2}))", () => {
    assert.deepEqual(eqObjects({a:1}, {a:2}), false);
  });
});
describe("#eqArrays", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3]]))", () => {
    assert.deepEqual(eqArrays([1], [1]), true);
  });
  it("returns true for ([], []]))", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns false for ([1], [1, 2]))", () => {
    assert.deepEqual(eqArrays([1], [1, 2]), false);
  });
  it("returns false for ([1, '2'], [1, 2]))", () => {
    assert.deepEqual(eqArrays([1, '2'], [1, 2]), false);
  });
  it("returns true for ([1, [2, 3]], [1, [2, 3]]))", () => {
    assert.deepEqual(eqArrays([1, [2, 3]], [1, [2, 3]]), true);
  });
  it("returns true for ([[[[1]]]], [[[[1]]]]))", () => {
    assert.deepEqual(eqArrays([[[[1]]]], [[[[1]]]]), true);
  });
});
describe("#without", () => {
  it("returns ['2'] for ['1', '1', '1', '2', '3', '1' , '1'] and ['1', 2, '3'])", () => {
    assert.deepEqual(without(['1', '1', '1', '2', '3', '1' , '1'], ['1', 2, '3']), ["2"]);
  });
  it("returns [1, 2] for [1, 2, 3, 4] and [3, 4])", () => {
    assert.deepEqual(without([1, 2, 3, 4], [3, 4]), [1, 2]);
  });
});