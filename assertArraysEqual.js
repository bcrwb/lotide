const eqArrays = require('./eqArrays')


  const assertArraysEqual = function(arrayOne,arrayTwo){
    eqArrays(arrayOne,arrayTwo) ? console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  
  };
  
  

  module.exports = assertArraysEqual;