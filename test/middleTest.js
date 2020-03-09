const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(middle(['5']), '5'); 
  });
});

// assertArraysEqual(middle([1, 2, 3, 4]),[2,3] );
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
