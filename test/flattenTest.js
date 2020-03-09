const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
    it("returns true if array nested array becomes non nested array", () => {
        assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6])
    })
})


