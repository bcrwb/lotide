const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// const eqArrays = function(array1,array2){
//     let track = null;
//   for(let i = 0; i <array1.length;i++){
//      for(let j = 0;j<array2.length;j++){
//        if(array1[i] === array2[i]){
//          track =  true
//        } else {
//           track = false
//        }
//      }
      
   
//     }
//     return track
//   }

  // const assertArraysEqual = function(arrayOne,arrayTwo){
  //   eqArrays(arrayOne,arrayTwo) ? console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  
  // };

  const middle = function(array){
      if(array.length < 0){
          return [];
      } else if (array.length % 2 !== 0){
          return array[Math.floor(array.length/2)]
      } else {
          return [array[Math.floor(array.length/2 -1 )],array[Math.floor(array.length/2)]]
      }

  }

 console.log(middle([1])) 
// console.log(middle([1, 2]))

// console.log(middle([1, 2, 3])) 
// console.log(middle([1, 2, 3, 4, 5])) 

// assertArraysEqual(middle([1, 2, 3, 4]),[2,3] );
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

module.exports = middle;