const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
  };

const countLetters = function(string){
    const letters = {};
    for(let letter of string){
        if(letters[letter]){
        letters[letter] += 1
        } else if(letter !== ' '){
            letters[letter] = 1
        }
    }
        //console.log(letter)
        console.log(letters)
    }



countLetters("hello");
countLetters("light house");
countLetters('llllllllllll');

