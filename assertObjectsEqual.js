
  const eqArrays = function(array1,array2){
    let track = null;
  for(let i = 0; i <array1.length;i++){
     for(let j = 0;j<array2.length;j++){
       if(array1[i] === array2[i] && array1.length === array2.length){
         track =  true
       } else {
          track = false
       }
     }
      
   
    }
    return track
  }


  const eqObjects = function(object1, object2) {
      
      if(Object.keys(object1).length !== Object.keys(object2).length){
          return false;
      }
      for(let item in object1){
          if(object1[item] !== object2[item]){
            if(Array.isArray(object1[item]) && Array.isArray(object2[item])){
                return eqArrays(object1[item],object2[item]);
            }
              return false
          } 
     }
      return true
        
    }

    const assertObjectsEqual = function(actual, expected) {
        const inspect = require('util').inspect;
        eqObjects(actual,expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      };

     assertObjectsEqual({a:1,b:2},{a:1,b:2});

     assertObjectsEqual({a:1,b:2},{a:1,b:3});