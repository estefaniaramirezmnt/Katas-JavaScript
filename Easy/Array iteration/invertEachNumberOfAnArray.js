// Given an array, invert the positive integers into negative and viceversa

function invert(array) {
    let newArray = [];
    for (let char of array) {
        char = char * -1;
        newArray.push(char)
    }
   return newArray
}

function invert2(array) {
    return array.map(n => n * -1);
}