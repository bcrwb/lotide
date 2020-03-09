const assert = require('chai').assert;
const tail = require("../tail");



describe('#tail', () => {
    it("returns true when the array items match", () => {
        assert.deepEqual(tail([ "Hello","Lighthouse", "Labs"]),["Labs"])
    })
})