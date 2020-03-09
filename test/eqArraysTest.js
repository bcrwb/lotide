const eqArrays = require('../eqArrays');  
const _ = require("../index")
  console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
  console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
  
  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
  
  _.assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  _.assertEqual(eqArrays([1, 5, 6], [1, 2, 3]), false);
  _.assertEqual(eqArrays([1, 5, 6], [1, 2, "3"]), false);