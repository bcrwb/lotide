
//Immediately Invoked Function
const sayHi = (function(){
console.log('say hi')
})();


const log = function(index,value){
    console.log(index,value);
}
const otherLog = function(index,value,array){
    console.log(index * value/array.length);
}
const forEach = function(array,callback){
    for(let i = 0;i<array.length;i++){
        callback(i,array[i],array);
    }
}


forEach(numbers,otherLog);
forEach(['a','b','c'],log);


const forEachReverse = function(array,callback){
    for(let i = array.length-1;i>=0;i--){
        callback(array[i]);
    }
}

//inline function and annonomyous function
forEachReverse([1,1,3], (value,i) =>{
    console.log(value * i)
})

forEachReverse(['a','b'], value =>{
    console.log(value.charCodeAt(0))
})

//filter
const filter=(array)=>{
    const result = [];
    for(let value of array){
        if(value%2 === 0){
            result.push(value);
        }
    }
    return result
}
const evens = filter([1,2,3,4,5],(value)=>{

})

console.log("evens", evens);