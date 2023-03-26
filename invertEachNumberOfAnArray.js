// Given an array, invert the positiv integers into negative and viceversa

function invert(array) {
    let newArray = [];
    for (let char of array) {
        char = char * -1;
        newArray.push(char)
    }
   return newArray
}

console.log(invert([1,2,3,4,5]))


function invert2(array) {
    return array.map(n => n * -1);
}
console.log(invert2([1,2,3,4,5]))