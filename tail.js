

// const assertEqual = function(actual, expected) {
//     actual = actual.toString();
//     expected = expected.toString();
//   actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

// };

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Hello", "Hello");
// assertEqual(4, 5);
// assertEqual('hi', "Hi");

const tail = function(array) {
  let newArray = array.slice();
  newArray.shift();
  return newArray;
};



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

module.exports = tail