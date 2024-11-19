// Given an array of integers, return a new array with each value doubled.

function mapingAnArray(array) {
    const newArray = array.map(number => number *2);
    return newArray;
}


function mapingArray2(array) {
    return array.map(number => number * 2);
}

function mapingArray3(array) { // most efficient
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return arr;
}


