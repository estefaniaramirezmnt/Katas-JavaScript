// Given an array of integers, return a new array with each value doubled.

function maps(x) {
    const newArray = x.map(n => n*2);
    return newArray;
}

function maps2(x) {
    var newArr = [];
    x.map(function(num) {
        newArr.push(num*2);
    })
    return newArr;
}

function maps3(x) {
    return x.map(n => n * 2);
}

function maps4(x) { // most efficient
    let arr = [];
    for (var i = 0; i < x.length; i++) {
        arr.push(x[i] * 2);
    }
    return arr;
}


