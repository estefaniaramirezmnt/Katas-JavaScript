// Get the sum of all integer of both arrays.

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b)
}

function arrayPlusArrayManually(arr1, arr2) {
    let result1 = 0;
    let result2 = 0;
    for (let num of arr1) {
        result1 += num;
    }
    for (let num of arr2) {
        result2 += num;
    }
    return result1 + result2;
}

