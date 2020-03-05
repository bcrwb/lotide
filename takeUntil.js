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

const takeUntil = function (array, callback) {
    let results = [];
    for (let item of array) {
        if (callback(item)) {
            return results
        } else {
            results.push(item);
        }
    }
    return results;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertEqual(eqArrays(results1,[ 1, 2, 5, 7, 2 ]),true));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertEqual(eqArrays(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]),true));

const data3 = [1,2,3,4,5,6,7,8,9,10];
const results3 = takeUntil(data3,num => num === 5);
console.log(assertEqual(eqArrays(results3,[ 1, 2, 3, 4 ]),true));
