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








const letterPositions = function(sentence) {
    const results = {};
    let index =0;
    for(let letter of sentence){
        if(!results[letter]){
            results[letter] = [];
            results[letter].push(index);
        } else{
            results[letter].push(index);
        }
        index++;
       
    }
    delete results[' ']
    return results;
  };

  console.log(letterPositions('hello'));
  console.log(letterPositions('lllllll'));
  console.log(letterPositions('light house labs'));


  assertArraysEqual(letterPositions("hello").e, [1]);
