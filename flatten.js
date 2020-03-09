const flatten = function(array){
let newArray = '';
let final = [];
if(Array.isArray(array)){
newArray=(array.join(','));
 final = newArray.split(',').map(function(item) {
    return parseInt(item, 10);
});
}
return final
}




module.exports = flatten