const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  };
  const eqArrays = function(array1,array2){
    let track = null;
  for(let i = 0; i <array1.length;i++){
     for(let j = 0;j<array2.length;j++){
       if(array1[i] === array2[i]){
         track =  true
       } else {
          track = false
       }
     }
  }
    return track
  }


const words = ["ground", "control", "to", "major", "tom"];

const map = ((array,callback)=>{
const results =[];
for (let item of array) {
    results.push(callback(item));
  }
  return results;
});

const results1 = map(words, word => word[0]);
console.log(assertEqual(eqArrays(results1,['g','c','t','m','t']),true));
console.log(assertEqual(eqArrays(results1,['c','t','m','t']),false));