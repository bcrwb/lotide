const piggy = function () {


   let string = process.argv
    for (let i = 2; i < string.length; i++) {
        let letter = (string[i][0]);
        console.log(string[i].slice(1, string[i].length) + letter + 'ay');

    }


}

piggy();