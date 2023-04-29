// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    var newArr = [];
    var zeroCount = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i])
        } else {
            zeroCount += 1;
        }
    }
    for (i = 1; i <= zeroCount; i++) {
        newArr.push(0);
    }
    return newArr;

}

var moveZeros2 = function (arr) {
    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) //[false,1,1,2,1,3,"a",0,0]