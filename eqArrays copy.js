const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
  };
  
  // TEST CODE
  //assertEqual("Lighthouse Labs", "Bootcamp");
  //assertEqual(1, 1);
  //assertEqual("Hello", "Hello");
  //assertEqual(4, 5);
  //assertEqual('hi',"Hi");
  
  
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
  
  console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
  console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
  
  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 5, 6], [1, 2, 3]), false);
  assertEqual(eqArrays([1, 5, 6], [1, 2, "3"]), false);