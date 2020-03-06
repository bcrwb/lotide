const flatten = function(array){
let newArray = '';
let final = [];
if(Array.isArray(array)){
newArray=(array.join(','));
 final = newArray.split(',').map(function(item) {
    return parseInt(item, 10);
});
}
console.log(final)
}



flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]