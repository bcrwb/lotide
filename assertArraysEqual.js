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

  const assertArraysEqual = function(arrayOne,arrayTwo){
    eqArrays(arrayOne,arrayTwo) ? console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  
  };
  
  assertArraysEqual([1,2,3],[1,2,3])
  assertArraysEqual([1,2,3],[1,2,4])