const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
  };


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
      

        const ab = { a: "1", b: "2" };
        const ba = { b: "2", a: "1" };
        console.log(eqObjects(ab, ba)); // => true
        
        const abc = { a: "1", b: "2", c: "3" };
       console.log( eqObjects(ab, abc)); // => false


       const cd = { c: "1", d: ["2", 3] };
       const dc = { d: ["2", 3], c: "1" };
       console.log(eqObjects(cd, dc)); // => true
       
       const cd2 = { c: "1", d: ["2", 3, 4] };
       console.log(eqObjects(cd, cd2)); // => false