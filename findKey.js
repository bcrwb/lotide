const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  };

  const findKey = function(object,callback ){
    for (let [key, value] of Object.entries(object)) {
        if (callback(value)){
            return key;
        }
    }
  }
    
  
 

  const fruitRanking = {
     apple: 2,
      banana: 3

  }

 console.log( findKey(fruitRanking,function(x) { 
     return x === 3}));