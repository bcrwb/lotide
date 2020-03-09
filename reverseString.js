const reverse = function () {

    let string = process.argv.slice(2, process.argv.length);
    let array = []
    for (let i = 0; i < string.length; i++) {

        for (let j = string[i].length; j >= 0; j--) {
            console.log(string[i][j])
        }

    }
}




reverse();
